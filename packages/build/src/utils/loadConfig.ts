import fs from 'node:fs';
import { readConfig } from './readConfig';
import type { Globs } from 'gulp';

export type BuildConfig = {
  entry: Globs;
  output?: string;
  clean?: boolean;
};

export const defineBuildConfig = (config: BuildConfig) => config;

export const loadConfig = <Config extends Record<string, any> = any>(
  filename = 'wisteria.config'
): Config => {
  const filepath = fs.readdirSync(process.cwd(), 'utf8').find(item => {
    const stat = fs.statSync(item);
    return stat.isFile() && item.startsWith(filename);
  });
  if (!filepath) throw new Error(`${filename} not found`);
  return readConfig(filepath);
};
