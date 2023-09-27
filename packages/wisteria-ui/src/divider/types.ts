import type { JSX } from 'preact/jsx-runtime';

export interface DividerProps {
  dashed?: boolean;
  insetSize?: number;
  className?: string;
  style?: JSX.CSSProperties | string;
  direction?: 'horizontal' | 'vertical';
  textAlign?: 'left' | 'center' | 'right';
  variant?: 'inset' | 'middle' | 'fullWidth';
  children?: JSX.Element;
}
