import merge2 from 'merge2';
import type Vinyl from 'vinyl';
import { consola } from 'consola';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import gulp, { type Globs } from 'gulp';
import type compile from 'gulp-typescript';
import through2, { type TransformCallback } from 'through2';
import { tsx2js } from './pipline/tsx2js';
import { scss2css } from './pipline/scss2css';
import { babelify } from './pipline/babelify';
import { flattenImportUrl } from './pipline/flattenImportUrl';
import type { CompileModule } from '../utils/helper';

const matchStream = (options: { extensions: string[] }) => {
  return through2.obj(function (
    file: Vinyl,
    _,
    nextCallback: TransformCallback
  ) {
    if (file.isNull()) {
      return nextCallback();
    }
    const { extensions } = options;
    if (extensions.includes(file.extname)) {
      this.push(file);
    }
    nextCallback();
  });
};

export const createStream = (
  globs: Globs,
  destination: string,
  module: CompileModule
) => {
  return new Promise<void>((resolve, reject) => {
    const sourceStream = gulp.src(globs, {
      dot: false,
      allowEmpty: true,
      onMatch: result => {
        consola.log('match hook => ', result);
      }
    });

    const style = sourceStream
      .pipe(matchStream({ extensions: ['.css', '.scss'] }))
      .pipe(scss2css())
      .pipe(postcss([autoprefixer({ grid: true })]));

    const { js: esm, dts } = sourceStream
      .pipe(matchStream({ extensions: ['.js', '.ts', '.jsx', '.tsx'] }))
      .pipe<compile.CompileStream>(tsx2js());

    const js = esm.pipe(babelify({ module: module }));

    const stream = merge2([dts, js, style], {
      pipeError: true,
      objectMode: true
    })
      .pipe(flattenImportUrl())
      .pipe(gulp.dest(destination));

    stream.on('finish', resolve);
    stream.on('error', reject);
  });
};
