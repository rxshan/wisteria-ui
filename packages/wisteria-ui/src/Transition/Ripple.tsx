import type { RippleProps } from './interface';
import { useRippleState } from './hooks/useRippleState';
import { TransitionGroup, CSSTransition } from 'preact-transitioning';
import {
  combineStyles,
  createCssClass,
  type WisteriaUI
} from '@wisteria-ui/utilities';

const [rootClass, clsx] = createCssClass('ripple');

export const Ripple: WisteriaUI.Component<RippleProps> = ({
  color,
  disabled
}) => {
  const { ripples, triggerRipple, removeRipple } = useRippleState();

  return (
    <span
      className={rootClass}
      style={combineStyles({
        color,
        pointerEvents: disabled && 'none'
      })}
      onMouseUp={removeRipple}
      onMouseLeave={removeRipple}
      onMouseDown={triggerRipple}
    >
      <TransitionGroup appear exit duration={500}>
        {ripples.map(([key, ripple]) => {
          return (
            <CSSTransition key={key} classNames={clsx('effect')}>
              <span
                className={clsx('effect')}
                style={{
                  top: ripple.offsetY,
                  left: ripple.offsetX,
                  width: ripple.size,
                  height: ripple.size
                }}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </span>
  );
};
