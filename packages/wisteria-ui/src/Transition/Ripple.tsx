import { Transition } from './Transition';
import type { TransitionProps, RippleProps } from './interface';
import { useRef, useState } from 'preact/hooks';
import { type FunctionComponent } from 'preact';
import { TransitionGroup } from 'preact-transitioning';
import {
  isTouchEvent,
  combineStyles,
  createCssClass
} from '@wisteria-ui/utilities';

type RippleKey = string | number;
type RippleAttrs = {
  radius: number;
  coords: Record<'x' | 'y', number>;
};

const RIPPLE_DURATION = 500;

const [selfClass, clsx] = createCssClass('ripple');

interface RippleEffectProps extends Omit<TransitionProps, 'children'> {
  top: number;
  left: number;
  size: number;
  color?: string;
}

const RippleEffect: FunctionComponent<RippleEffectProps> = ({
  top,
  left,
  size,
  ...props
}) => {
  const [state, setState] = useState<Record<'enter' | 'exit', boolean>>({
    exit: false,
    enter: false
  });
  return (
    <Transition
      {...props}
      appear
      onEnter={() => {
        console.log('enter');

        setState(prev => ({ ...prev, enter: true }));
      }}
      onExit={() => {
        console.log('exit');

        setState(prev => ({ ...prev, exit: true }));
      }}
      onEntered={() => {
        console.log('enter done');
      }}
    >
      {() => {
        return (
          <span
            className={clsx('effect', {
              'effect-exit': state.exit
            })}
          >
            <span
              style={{ top, left, width: size, height: size }}
              className={clsx('effect-child', {
                'effect-child-enter': state.enter
              })}
            />
          </span>
        );
      }}
    </Transition>
  );
};

export const Ripple: FunctionComponent<RippleProps> = ({
  color,
  center,
  disabled
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const nextKey = useRef(0);
  const [ripples, setRipples] = useState<Array<[RippleKey, RippleAttrs]>>([]);

  const getRippleAttrs = (event: TouchEvent | MouseEvent): RippleAttrs => {
    const rect = ref.current?.getBoundingClientRect()!;

    if (center) {
      const radius = Math.ceil(
        Math.sqrt((rect.width / 2) ** 2 + (rect.height / 2) ** 2)
      );
      return {
        radius,
        coords: {
          x: Math.round(rect.width / 2),
          y: Math.round(rect.height / 2)
        }
      };
    }
    const { clientX, clientY } = isTouchEvent(event) ? event.touches[0] : event;
    const coords = {
      x: Math.round(clientX - rect.left),
      y: Math.round(clientY - rect.top)
    };
    const sizeX = Math.max(Math.abs(rect.width - coords.x), coords.x);
    const sizeY = Math.max(Math.abs(rect.height - coords.y), coords.y);

    return {
      coords,
      radius: Math.ceil(Math.sqrt(sizeX ** 2 + sizeY ** 2))
    };
  };

  const createRipple = (event: TouchEvent | MouseEvent) => {
    const ripple = getRippleAttrs(event);
    setRipples(prev => [...prev, [nextKey.current, ripple]]);
    nextKey.current += 1;
  };

  const removeRipple = () => {
    setRipples(ripples.slice(1));
  };

  return (
    <span
      ref={ref}
      className={selfClass}
      style={combineStyles({
        color,
        pointerEvents: disabled && 'none'
      })}
      onMouseDown={createRipple}
      onMouseUp={removeRipple}
      onMouseLeave={removeRipple}
    >
      <TransitionGroup exit enter duration={RIPPLE_DURATION}>
        {ripples.map(([key, { radius, coords }]) => {
          const offsetX = coords.x - radius;
          const offsetY = coords.y - radius;

          return (
            <RippleEffect
              key={key}
              top={offsetY}
              left={offsetX}
              size={radius * 2}
            />
          );
        })}
      </TransitionGroup>
    </span>
  );
};
