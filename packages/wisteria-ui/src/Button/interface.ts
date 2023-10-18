import type { CornerShape } from '@wisteria-ui/utilities';

export interface ButtonProps {
  block?: boolean;
  color?: string;
  corner?: CornerShape;
  variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
}
