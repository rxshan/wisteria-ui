import defu from 'defu';
import chalk from 'chalk';
import path from 'node:path';
import consola from 'consola';
import type Vinyl from 'vinyl';
import tsc, { type Settings } from 'gulp-typescript';
import { readConfig } from '../../../utils/helper';
import through2 from 'through2';

type TSConfig = {
  extends: string;
  include: string[];
  exclude: string[];
  files: string[];
  compilerOptions: Settings;
};

const getCompilationConfig = (filename: string) => {
  const defaultCompilerOptions: Settings = {
    target: 'es5',
    module: 'es6',
    jsx: 'react',
    jsxFactory: 'h',
    jsxFragmentFactory: 'Fragment',
    declaration: true,
    moduleResolution: 'node',
    noEmitOnError: false
  };

  const configPath = path.isAbsolute(filename)
    ? filename
    : path.resolve(filename);

  const tsconfig = readConfig<Partial<TSConfig>>(configPath);

  if (tsconfig.extends) {
    const extendsConfig = readConfig<Partial<TSConfig>>(tsconfig.extends);
    return defu(
      tsconfig.compilerOptions,
      extendsConfig.compilerOptions,
      defaultCompilerOptions
    );
  }
  return defu(tsconfig.compilerOptions, defaultCompilerOptions);
};

export const tsx2js = (config?: Partial<TSConfig['compilerOptions']>) => {
  const compilationConfig = defu(config, getCompilationConfig('tsconfig.json'));

  const result = tsc(compilationConfig, {
    error: ({ fullFilename, diagnostic }) => {
      consola.warn(fullFilename);
      consola.log(chalk.red(diagnostic.messageText), '\n');
    }
  });
  const FilterEmptyExpression = through2.ctor(function (
    file: Vinyl,
    _,
    nextCallback
  ) {
    if (file.isNull()) {
      return nextCallback();
    }
    let fileContent = file.contents!.toString();

    // if (file.basename.startsWith('index')) {
    fileContent = fileContent.replace(
      /import.*?(\.(css|sass|scss))["'];?\s*/g,
      (expression, extname) => {
        if (file.basename.endsWith('.d.ts')) {
          return '';
        }
        return expression.replace(extname, '.css');
      }
    );
    // }

    file.contents = Buffer.from(fileContent);
    nextCallback(null, file);
  });

  result.dts = result.dts.pipe(new FilterEmptyExpression({ objectMode: true }));
  result.js = result.js.pipe(new FilterEmptyExpression({ objectMode: true }));

  return result;
};
