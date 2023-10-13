import type { JSX } from 'preact/jsx-runtime';
import type { EnumType } from '@wisteria-ui/utilities';

export enum AvatarSize {
  Small = 'small',
  Normal = 'normal',
  Large = 'large'
}

export interface AvatarProps
  extends Omit<JSX.HTMLAttributes<HTMLImageElement>, 'size'> {
  size?: EnumType<AvatarSize> | number;
  color?: string;
  variant?: 'square' | 'rounded' | 'circle';
}

export interface AvatarGroupProps
  extends Pick<AvatarProps, 'size' | 'variant'> {
  total?: number;
  maxCount?: number;
}
