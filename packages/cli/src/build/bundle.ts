import os from 'node:os';
import fs from 'node:fs';
import path from 'node:path';
import { consola } from 'consola';
import { rollup } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export const generateBundle = async (dest: string) => {
  const modules = fs
    .readdirSync(dest)
    .filter(module => ['es', 'cjs'].includes(module));

  if (!modules.length) {
    consola.warn('Not found es or cjs, generate bundle will be skipped');
    return Promise.resolve();
  }

  let [defaultModule] = modules;

  if (modules.includes('cjs')) {
    defaultModule = 'cjs';
  }
  const entry = path.resolve(dest, defaultModule, 'index.js');

  const bundle = await rollup({
    input: entry,
    external: ['preact'],
    plugins: [
      commonjs(),
      postcss({
        extract: true,
        minimize: true,
        sourceMap: true
      }),
      resolve({ extensions: ['.js'], exportConditions: ['node'] })
    ]
  });

  await bundle.write({
    sourcemap: true,
    compact: true,
    file: path.join(dest, 'violetx.js'),
    format: 'umd',
    name: 'violetx',
    globals: {
      preact: 'Preact'
    },
    exports: 'named',
    plugins: [
      terser({
        compress: true,
        keep_classnames: true,
        numWorkers: os.cpus().length
      })
    ]
  });

  await bundle.close();
};
