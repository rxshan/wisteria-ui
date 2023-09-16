import {
  type VNode,
  cloneElement,
  createElement,
  isValidElement,
  type FunctionalComponent
} from 'preact';
import { Transition as TransitionComponent } from 'preact-transitioning';
import {
  combineStyles,
  suffixCssUnit,
  createCssClass,
  combineClassnames
} from '../../utils';
import type { AnimateProps } from './types';

export const withAnimate = (ns: string): FunctionalComponent<AnimateProps> => {
  const [selfClass, clsx] = createCssClass(ns);

  return ({
    children,
    appear = true,
    duration = 200,
    destoryOnClosed = true,
    ...props
  }) => {
    const innerStyle = {
      [`--wisteria-${ns}-duration`]: suffixCssUnit(duration, 'ms')
    };

    return (
      <TransitionComponent
        {...props}
        appear={appear}
        alwaysMounted={!destoryOnClosed}
      >
        {(_, phase) => {
          const kebabCaseClass = clsx(
            phase.replace(/([A-Z])/g, '-$1').toLowerCase()
          );
          if (!isValidElement(children)) {
            return createElement(
              'span',
              {
                style: innerStyle,
                className: combineClassnames(selfClass, kebabCaseClass)
              },
              children
            );
          }
          const vnode = children as VNode<any>;
          return cloneElement(vnode, {
            style: combineStyles(vnode.props.style, innerStyle),
            className: combineClassnames(
              selfClass,
              kebabCaseClass,
              vnode.props.className
            )
          });
        }}
      </TransitionComponent>
    );
  };
};
