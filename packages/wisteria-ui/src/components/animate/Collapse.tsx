import type { FunctionalComponent } from 'preact';
import { Animate } from './Animate';
import type { CollapseProps } from './types';
import { createCssClass, suffixCssUnit } from '../../utils';

const [selfClass] = createCssClass('collapse');

export const Collapse: FunctionalComponent<CollapseProps> = ({
  children,
  duration = 200,
  ...props
}) => {
  const innerStyle = {
    [`--wisteria-collapse-duration`]: suffixCssUnit(duration, 'ms')
  };
  return (
    <Animate {...props}>
      {() => {
        return (
          <div className={selfClass} style={innerStyle}>
            {children}
          </div>
        );
      }}
    </Animate>
  );
};
