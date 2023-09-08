import type { FunctionalComponent } from 'preact';
import { SVGIconRoot, type SVGIconRootProps } from '../SVGIconRoot';

export const RadioOutlined: FunctionalComponent<SVGIconRootProps> = props => {
  return (
    <SVGIconRoot {...props}>
      <path
        fill="currentColor"
        d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
      />
    </SVGIconRoot>
  );
};
