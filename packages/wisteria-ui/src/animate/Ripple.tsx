import { Animate } from './Animate';
import type { RippleProps } from './types';
import { useRef, useState } from 'preact/hooks';
import { type FunctionalComponent } from 'preact';
import { TransitionGroup } from 'preact-transitioning';
import {
  isTouchEvent,
  combineStyles,
  suffixCssUnit,
  createCssClass
} from '@wisteria-ui/shared';

type RippleKey = string | number;
type RippleAttrs = {
  radius: number;
  coords: Record<'x' | 'y', number>;
};

const RIPPLE_DURATION = 300;

const [selfClass, clsx] = createCssClass('ripple');

export const Ripple: FunctionalComponent<RippleProps> = ({
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
    setRipples(prev => prev.slice(1));
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
      onTouchStart={createRipple}
      onMouseUp={removeRipple}
      onTouchEnd={removeRipple}
    >
      <TransitionGroup exit appear duration={RIPPLE_DURATION}>
        {ripples.map(([key, { radius, coords }]) => {
          const offsetX = suffixCssUnit(coords.x - radius);
          const offsetY = suffixCssUnit(coords.y - radius);

          const rippleSize = suffixCssUnit(radius * 2 + 1);

          return (
            <Animate key={key} className={clsx('effect')}>
              <span
                style={combineStyles({
                  top: offsetY,
                  left: offsetX,
                  width: rippleSize,
                  height: rippleSize,
                  transitionDuration: suffixCssUnit(RIPPLE_DURATION, 'ms')
                })}
              />
            </Animate>
          );
        })}
      </TransitionGroup>
    </span>
  );
};
