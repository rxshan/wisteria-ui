import type { ComponentChild, RenderableProps } from 'preact';
import { SVGIconRoot, type SVGIconRootProps } from './SVGIconRoot';

export const withSVGIcon = (children: ComponentChild) => {
  return function SVGIcon(
    props: Omit<RenderableProps<SVGIconRootProps>, 'children'>
  ) {
    return <SVGIconRoot {...props}>{children}</SVGIconRoot>;
  };
};
