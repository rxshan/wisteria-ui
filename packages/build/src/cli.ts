import cac from 'cac';
import pkg from '../package.json';

export const startCommand = async () => {
  const cli = cac('wisteria');

  cli
    .command('build', 'Build module with gulp')
    .option('-b, --bundle', 'Create bundle');

  cli.help();
  cli.version(pkg.version);
  cli.parse(process.argv, { run: false });
  await cli.runMatchedCommand();
};
