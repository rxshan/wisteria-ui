import type { JSX } from 'preact/jsx-runtime';
import type { EnumType } from '@wisteria-ui/utilities';

export enum BadgeVariant {
  Dot = 'dot',
  Standard = 'standard'
}

type OffsetGap = number | string;

export interface BadgeProps
  extends Pick<JSX.HTMLAttributes, 'style' | 'className'> {
  invisible?: boolean;
  color?: string;
  max?: number;
  count?: number;
  showZero?: boolean;
  variant?: EnumType<BadgeVariant>;
  offset?: [OffsetGap, OffsetGap];
}