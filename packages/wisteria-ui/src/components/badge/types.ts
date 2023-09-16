import type { JSX } from 'preact/jsx-runtime';

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
  variant?: `${BadgeVariant}`;
  offset?: [OffsetGap, OffsetGap];
}
