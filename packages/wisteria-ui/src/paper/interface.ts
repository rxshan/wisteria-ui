import type { JSX } from 'preact/jsx-runtime';

export interface PaperProps {
  width?: number | string;
  height?: number | string;
  corner?: number | string;
  elevation?: number;
  variant?: 'elevation' | 'outlined';
  style?: JSX.CSSProperties;
}
