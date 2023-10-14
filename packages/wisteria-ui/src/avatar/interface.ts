import type { EnumType } from '@wisteria-ui/utilities';
import type { ComponentChild } from 'preact';

export enum AvatarSize {
  Small = 'small',
  Normal = 'normal',
  Large = 'large'
}

export interface AvatarProps {
  color?: string;
  size?: EnumType<AvatarSize> | number;
  variant?: 'square' | 'rounded' | 'circle';
  children?: ComponentChild;
}

export interface AvatarGroupProps
  extends Pick<AvatarProps, 'size' | 'variant'> {
  total?: number;
  maxCount?: number;
  children?: ComponentChild;
}
