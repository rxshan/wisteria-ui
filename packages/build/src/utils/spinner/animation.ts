import ora from 'ora';

export const spinner = ora({ color: 'green' });

export enum SpinnerAction {
  START = 'start',
  FAIL = 'fail',
  STOP = 'stop',
  SUCCESS = 'success'
}

export type SpinnerSignalMessage = {
  type: SpinnerAction;
  text?: string;
  closeChildProcess?: boolean;
};

function handleChildProcessMessage({
  type,
  text,
  closeChildProcess
}: SpinnerSignalMessage) {
  switch (type) {
    case SpinnerAction.START:
      spinner.start(text);
      break;
    case SpinnerAction.STOP:
      spinner.stop();
      break;
    case SpinnerAction.SUCCESS:
      spinner.succeed(text);
      break;
    case SpinnerAction.FAIL:
      spinner.fail(text);
      break;
  }
  if (type !== 'start' && closeChildProcess) {
    process.exit(1);
  }
}

process.on('message', handleChildProcessMessage);
