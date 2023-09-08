import type { JSX } from 'preact/jsx-runtime';
import type { FunctionalComponent } from 'preact';
import { combineStyles } from '../utils';

export interface SVGIconRootProps
  extends Omit<JSX.SVGAttributes, 'viewBox' | 'xmlns'> {
  color?: string;
}

export const SVGIconRoot: FunctionalComponent<SVGIconRootProps> = ({
  color,
  style,
  children,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={combineStyles({ color }, style)}
      {...props}
    >
      {children}
    </svg>
  );
};
