import chalk from 'chalk';
import process from 'node:process';
import { consola } from 'consola';
import { startCommand } from './cli';

class PrettyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;

    if (typeof Error.captureStackTrace === 'function')
      Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error(message).stack;
  }
}

function handleError(error: unknown) {
  if (error instanceof PrettyError) {
    consola.error(chalk.red(error.message));
  } else {
    consola.error(chalk.red(error));
    console.log(error);
  }

  process.exitCode = 1;
}

startCommand().catch(handleError);
