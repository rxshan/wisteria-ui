import jiti from 'jiti';
import { consola } from 'consola';
import { isAbsolute, join } from 'node:path';
import { readFileSync, existsSync } from 'node:fs';

export const readConfig = <Config extends Record<string, any> = any>(
  path: string,
  cwd = process.cwd()
): Config => {
  const filepath = isAbsolute(path) ? path : join(cwd, path);

  if (existsSync(filepath)) {
    if (filepath.endsWith('.json')) {
      const file = readFileSync(filepath, 'utf-8');
      try {
        return JSON.parse(file);
      } catch (e: any) {
        consola.error(e.message);
        process.exit(1);
      }
    }
    if (/c?js$/g.test(filepath)) {
      return require(filepath).default;
    }
    if (/(mj|t)s/g.test(filepath)) {
      const runtime = jiti(__filename, {
        esmResolve: true,
        extensions: ['.ts', '.mjs']
      });
      return runtime(filepath).default;
    }
  }
  return Object.create(null);
};
