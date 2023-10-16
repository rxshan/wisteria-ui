import { isCallback, combineClassnames } from '@wisteria-ui/utilities';
import { Transition as TransitionComponent } from 'preact-transitioning';
import { type VNode, cloneElement, type FunctionalComponent } from 'preact';
import type { TransitionProps, PhaseClass } from './interface';

/**
 *
 * TODO: rewrite Transition component
 * @returns
 */
export const Transition: FunctionalComponent<TransitionProps> = ({
  children,
  appear = true,
  className = 'transition',
  destoryOnClosed = true,
  ...props
}) => {
  return (
    <TransitionComponent
      {...props}
      appear={appear}
      alwaysMounted={!destoryOnClosed}
    >
      {(state, phase) => {
        const phaseClass = phase.replace(/([A-Z])/g, word => {
          return `-${word.toLowerCase()}`;
        }) as PhaseClass;

        if (isCallback(children)) {
          return children({ state, phase, phaseClass });
        }
        const vnode = children as VNode<any>;

        return cloneElement(vnode, {
          ...vnode.props,
          className: combineClassnames(
            className,
            `${className}-${phaseClass}`,
            vnode.props.className
          )
        });
      }}
    </TransitionComponent>
  );
};
