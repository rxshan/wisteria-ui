import type { JSX } from 'preact/jsx-runtime';
import type { FunctionalComponent } from 'preact';
import { combineStyles } from '@wisteria-ui/utilities';

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
      width="20"
      height="20"
      viewBox="0 0 24 24"
      style={combineStyles({ color }, style)}
      {...props}
    >
      {children}
    </svg>
  );
};
