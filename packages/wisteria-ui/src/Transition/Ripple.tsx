import type { RippleProps } from './interface';
import { useRippleState, type RippleState } from './hooks/useRippleState';
import { TransitionGroup, Transition } from 'preact-transitioning';
import {
  combineStyles,
  createCssClass,
  type WisteriaUI
} from '@wisteria-ui/utilities';
import { useState } from 'preact/hooks';

const [rootClass, clsx] = createCssClass('ripple');

const RippleEffect: WisteriaUI.Component<Omit<RippleState, 'key'>> = ({
  size,
  offsetX,
  offsetY,
  ...props
}) => {
  const [exiting, setExiting] = useState(false);
  return (
    <Transition
      {...props}
      onExit={() => {
        setExiting(true);
      }}
    >
      {() => {
        return (
          <span
            className={clsx('effect')}
            style={{
              top: offsetY,
              left: offsetX,
              width: size,
              height: size
            }}
          >
            <span
              className={clsx('effect-child', {
                'effect-child-exiting': exiting
              })}
            />
          </span>
        );
      }}
    </Transition>
  );
};

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
        {ripples.map(({ key, ...ripple }) => (
          <RippleEffect key={key} {...ripple} />
        ))}
      </TransitionGroup>
    </span>
  );
};
