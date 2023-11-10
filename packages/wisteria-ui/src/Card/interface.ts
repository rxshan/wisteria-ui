import type { ComponentChild, JSX } from 'preact';
import type { EnumType } from '@wisteria-ui/utilities';
import type { CSSProperties } from 'preact/compat';

export enum CardMode {
  ELEVATED = 'elevated',
  OUTLINED = 'outlined'
  // CONTAINED = 'contained'
}

export interface CardProps {
  variant?: EnumType<CardMode>;
  children?: ComponentChild;
}

export interface CardTitleProps {
  title: ComponentChild;
  titleStyle?: CSSProperties;
  titleNumberOfLines?: number;
  subtitle?: string;
  subtitleStyle?: CSSProperties;
  subtitleNumberOfLines?: number;
  left?: ({ size }: { size: number }) => JSX.Element;
  leftStyle?: CSSProperties;
}

export interface CardActionsProps {
  placement?: 'left' | 'right';
}
