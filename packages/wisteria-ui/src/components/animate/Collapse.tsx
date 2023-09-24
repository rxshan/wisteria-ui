import { useRef } from 'preact/hooks';
import { Animate } from './Animate';
import type { CollapseProps } from './types';
import type { FunctionalComponent, JSX } from 'preact';
import { combineStyles, createCssClass, suffixCssUnit } from '../../utils';

const [selfClass, clsx] = createCssClass('collapse');

const COLLAPSE_SIZE = 0;

export const Collapse: FunctionalComponent<CollapseProps> = ({
  children,
  duration = 250,
  direction = 'vertical',
  destoryOnClosed = false,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const elementSizeRef = useRef<number>(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerStyle = {
    [`--wisteria-collapse-duration`]: suffixCssUnit(duration, 'ms')
  };

  const updateCollapseStyle = (cssStyle: JSX.CSSProperties) => {
    if (!ref.current) return;
    Object.assign(ref.current.style, cssStyle);
  };

  return (
    <Animate
      {...props}
      className={selfClass}
      destoryOnClosed={destoryOnClosed}
      onEnter={node => {
        props.onEnter?.(node);
        elementSizeRef.current = wrapperRef.current?.clientHeight ?? 0;
        console.log(elementSizeRef.current);

        updateCollapseStyle({
          visibility: 'visible',
          width: suffixCssUnit(wrapperRef.current?.clientWidth ?? 0),
          height: suffixCssUnit(COLLAPSE_SIZE)
        });
      }}
      onEntering={node => {
        updateCollapseStyle({
          height: suffixCssUnit(elementSizeRef.current)
        });
      }}
      onExiting={node => {
        updateCollapseStyle({
          height: suffixCssUnit(COLLAPSE_SIZE)
        });
      }}
      onExited={node => {
        updateCollapseStyle({
          height: suffixCssUnit(COLLAPSE_SIZE),
          visibility: 'hidden'
        });
      }}
    >
      {({ state }) => {
        const isEnter = state.enter || state.appear;
        console.log(isEnter);

        return (
          <div ref={ref} style={innerStyle}>
            <div
              ref={wrapperRef}
              style={combineStyles({ position: isEnter ? 'absolute' : '' })}
            >
              {children}
            </div>
          </div>
        );
      }}
    </Animate>
  );
};
