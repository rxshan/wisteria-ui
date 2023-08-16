import type { JSX } from 'preact/jsx-runtime';

export interface SliderProps {
  max?: number;
  step?: number;
}

export type SliderThumbProps = Pick<
  JSX.HTMLAttributes<HTMLElement>,
  | 'onMouseDown'
  | 'onMouseUp'
  | 'onMouseLeave'
  | 'onTouchStart'
  | 'onTouchEnd'
  | 'onTouchCancel'
  | 'onTouchMove'
>;
