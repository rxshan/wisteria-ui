import {
  type VNode,
  cloneElement,
  createElement,
  isValidElement,
  type FunctionalComponent
} from 'preact';
import {
  combineStyles,
  suffixCssUnit,
  createCssClass,
  combineClassnames
} from '@wisteria-ui/utilities';
import { Animate } from './Animate';
import type { AnimateProps } from './types';

export const withAnimate = (
  ns: string
): FunctionalComponent<Omit<AnimateProps, 'className' | 'children'>> => {
  const [selfClass, clsx] = createCssClass(ns);

  return ({ children, duration = 200, ...props }) => {
    const innerStyle = {
      [`--wisteria-${ns}-duration`]: suffixCssUnit(duration, 'ms')
    };

    return (
      <Animate {...props} duration={duration}>
        {({ phaseClass }) => {
          if (!isValidElement(children)) {
            return createElement(
              'span',
              {
                style: innerStyle,
                className: combineClassnames(selfClass, clsx(phaseClass))
              },
              children
            );
          }
          const vnode = children as VNode<any>;
          return cloneElement(vnode, {
            ...vnode.props,
            style: combineStyles(vnode.props.style, innerStyle),
            className: combineClassnames(
              selfClass,
              clsx(phaseClass),
              vnode.props.className
            )
          });
        }}
      </Animate>
    );
  };
};
