import path from 'node:path';
import { fork } from 'child_process';
import { SpinnerAction, type SpinnerSignalMessage } from './animation';

const spinner = fork(path.join(__dirname, './animation'));

export type SpinnerMessage = Omit<SpinnerSignalMessage, 'type'>;

export default {
  start: (message?: SpinnerMessage) => {
    spinner.send({ ...message, type: SpinnerAction.START });
  },
  success: (message?: SpinnerMessage) => {
    spinner.send({ ...message, type: SpinnerAction.SUCCESS });
  },
  fail: (message?: SpinnerMessage) => {
    spinner.send({ ...message, type: SpinnerAction.FAIL });
  },
  stop: (message?: SpinnerMessage) => {
    spinner.send({ ...message, type: SpinnerAction.STOP });
  }
};
