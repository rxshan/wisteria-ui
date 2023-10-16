import { Transition } from './Transition';
import type { TransitionProps } from './interface';
import {
  cloneElement,
  createElement,
  isValidElement,
  type ComponentChild,
  type VNode
} from 'preact';
import {
  combineStyles,
  suffixCssUnit,
  createCssClass,
  combineClassnames,
  type WisteriaUI
} from '@wisteria-ui/utilities';

export const withTransition = (
  namespace: string
): WisteriaUI.Component<
  Omit<TransitionProps, 'timeout'> & {
    children: ComponentChild;
    timeout?: number;
  }
> => {
  const [rootClass, clsx] = createCssClass(namespace);

  return ({ children, timeout = 200, ...props }) => {
    const innerStyle = {
      [`--${namespace}-duration`]: suffixCssUnit(timeout, 'ms')
    };

    return (
      <Transition {...props} timeout={timeout}>
        {state => {
          if (!isValidElement(children)) {
            return createElement(
              'span',
              {
                style: innerStyle,
                className: combineClassnames(rootClass, clsx(state))
              },
              children
            );
          }
          const vnode = children as VNode<any>;
          return cloneElement(vnode, {
            ...vnode.props,
            style: combineStyles(vnode.props.style, innerStyle),
            className: combineClassnames(
              rootClass,
              clsx(state),
              vnode.props.className
            )
          });
        }}
      </Transition>
    );
  };
};
