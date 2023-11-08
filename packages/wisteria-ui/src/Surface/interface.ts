import type { EnumType } from '@wisteria-ui/utilities';
import type { ComponentChild } from 'preact';

export enum SurfaceMode {
  OUTLINED = 'outlined',
  ELEVATED = 'elevated'
}

export interface SurfaceProps {
  variant?: EnumType<SurfaceMode>;
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  corner?: number | string;
  children?: ComponentChild;
  bgColor?: string;
}
