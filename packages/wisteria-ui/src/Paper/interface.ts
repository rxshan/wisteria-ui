import type { ComponentChild } from 'preact';

export interface PaperProps {
  width?: number | string;
  height?: number | string;
  corner?: number | string;
  elevation?: number;
  variant?: 'elevation' | 'outlined';
  children?: ComponentChild;
}
