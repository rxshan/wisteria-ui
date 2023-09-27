import { useRef } from 'preact/hooks';
import type { FunctionComponent } from 'preact';
import { createCssClass } from '../utils';
import type { SliderThumbProps } from './types';

const [selfClass, classnames] = createCssClass('slider-thumb');

export const SliderThumb: FunctionComponent<SliderThumbProps> = props => {
  const focused = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      {...props}
      ref={ref}
      className={selfClass}
      onMouseDown={() => {
        focused.current = true;
      }}
    >
      <span className={classnames('label')}>1</span>
    </div>
  );
};
