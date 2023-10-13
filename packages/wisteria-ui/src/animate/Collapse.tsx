import { useRef } from 'preact/hooks';
import { Animate } from './Animate';
import type { CollapseProps } from './types';
import type { FunctionalComponent } from 'preact';
import { combineStyles, suffixCssUnit } from '@wisteria-ui/utilities';

const COLLAPSE_SIZE = 0;

export const Collapse: FunctionalComponent<CollapseProps> = ({
  children,
  duration = 250,
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
    <Animate
      {...props}
      onEnter={node => {
        props.onEnter?.(node);
        updateCollpaseSize(COLLAPSE_SIZE);
        if (!isVertical) {
          hackWrapperSize(true);
        }
      }}
      onEntering={node => {
        props.onEntering?.(node);
        updateCollpaseSize(getElementRectBound());
        if (!isVertical) {
          hackWrapperSize();
        }
      }}
      onEntered={node => {
        props.onEntered?.(node);
        updateCollpaseSize('auto');
      }}
      onExit={node => {
        props.onExit?.(node);
        updateCollpaseSize(getElementRectBound());
      }}
      onExiting={node => {
        props.onExiting?.(node);
        updateCollpaseSize(COLLAPSE_SIZE);
      }}
    >
      {({ state }) => {
        const isExited = state.exitDone;
        const isEnter = state.appear || state.enter;

        return (
          <div
            ref={ref}
            style={combineStyles({
              position: 'relative',
              overflow: 'hidden',
              transitionProperty: dimension,
              visibility: isEnter || isExited ? 'hidden' : 'visible',
              transitionDuration: suffixCssUnit(duration, 'ms'),
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
    </Animate>
  );
};
