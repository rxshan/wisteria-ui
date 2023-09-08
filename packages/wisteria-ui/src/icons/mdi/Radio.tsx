import { Fragment } from 'preact/jsx-runtime';
import { withSVGIcon } from '../withSVGIcon';

export const RadioOutlineUnchecked = withSVGIcon(
  <path
    fill="currentColor"
    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
  />
);

export const RadioOutlineChecked = withSVGIcon(
  <Fragment>
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
    />
    <circle cx="12" cy="12" r="5" fill="currentColor" />
  </Fragment>
);

export const RadioRoundUnchecked = withSVGIcon(
  <path
    fill="currentColor"
    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
  />
);

export const RadioRoundChecked = withSVGIcon(
  <Fragment>
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
    />
    <circle cx="12" cy="12" r="5" fill="currentColor" />
  </Fragment>
);
