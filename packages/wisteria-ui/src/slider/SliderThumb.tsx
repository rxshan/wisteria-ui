import type { FunctionComponent } from 'preact';
import { createPrefixClass } from '../utils';
import type { SliderThumbProps } from './types';
import { useRef } from 'preact/hooks';
import { useEventListener } from '../hooks';

const classnames = createPrefixClass('slider-thumb');

export const SliderThumb: FunctionComponent<SliderThumbProps> = props => {
  const focused = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEventListener(
    'mouseup',
    () => {
      focused.current = false;
    },
    { capture: true }
  );

  return (
    <div
      {...props}
      ref={ref}
      className={classnames()}
      onMouseDown={() => {
        focused.current = true;
      }}
    >
      <span className={classnames('label')}>1</span>
    </div>
  );
};
