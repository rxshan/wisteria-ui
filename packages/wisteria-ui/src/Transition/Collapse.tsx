import { useRef } from 'preact/hooks';
import { Transition } from './Transition';
import type { FunctionalComponent } from 'preact';
import { PhaseStatus, type CollapseProps } from './interface';
import { combineStyles, suffixCssUnit } from '@wisteria-ui/utilities';

const COLLAPSE_SIZE = 0;

export const Collapse: FunctionalComponent<CollapseProps> = ({
  children,
  timeout = 250,
  direction = 'vertical',
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isVertical = direction === 'vertical';
  const dimension = isVertical ? 'height' : 'width';

  const getElementRectBound = () => {
    if (!wrapperRef.current) return 0;
    return isVertical
      ? wrapperRef.current.clientHeight
      : wrapperRef.current.clientWidth;
  };

  const updateCollpaseSize = (collpase: number | string) => {
    if (!ref.current) return;
    ref.current.style[dimension] = suffixCssUnit(collpase);
  };

  const hackWrapperSize = (enter?: boolean) => {
    if (!wrapperRef.current) return;
    Object.assign(wrapperRef.current.style, {
      position: enter ? 'absolute' : ''
    });
  };

  return (
    <Transition
      {...props}
      timeout={timeout}
      onEnter={() => {
        props.onEnter?.();
        updateCollpaseSize(COLLAPSE_SIZE);
        if (!isVertical) {
          hackWrapperSize(true);
        }
      }}
      onEntering={() => {
        props.onEntering?.();
        updateCollpaseSize(getElementRectBound());
        if (!isVertical) {
          hackWrapperSize();
        }
      }}
      onEntered={() => {
        props.onEntered?.();
        updateCollpaseSize('auto');
      }}
      onExit={() => {
        props.onExit?.();
        updateCollpaseSize(getElementRectBound());
      }}
      onExiting={() => {
        props.onExiting?.();
        updateCollpaseSize(COLLAPSE_SIZE);
      }}
    >
      {state => {
        const isExited = state === PhaseStatus.EXITED;

        return (
          <div
            ref={ref}
            style={combineStyles({
              position: 'relative',
              overflow: 'hidden',
              transitionProperty: dimension,
              visibility: isExited ? 'hidden' : 'visible',
              transitionDuration: suffixCssUnit(timeout, 'ms'),
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            })}
          >
            <div
              ref={wrapperRef}
              style={combineStyles({
                display: 'flex'
              })}
            >
              {children}
            </div>
          </div>
        );
      }}
    </Transition>
  );
};
