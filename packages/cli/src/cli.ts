import cac from 'cac';
import pkg from '../package.json';
import build from './build';

export const startCommand = async () => {
  const cli = cac('wisteria');

  cli
    .command('build', 'Build module with gulp')
    .option('-b, --bundle', 'Create bundle')
    .action(build);

  cli.help();
  cli.version(pkg.version);
  cli.parse(process.argv, { run: false });
  await cli.runMatchedCommand();
};
