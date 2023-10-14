import type { EnumType } from '@wisteria-ui/utilities';

export enum BadgeVariant {
  Dot = 'dot',
  Standard = 'standard'
}

type OffsetGap = number | string;

export interface BadgeProps {
  invisible?: boolean;
  color?: string;
  max?: number;
  count?: number;
  showZero?: boolean;
  variant?: EnumType<BadgeVariant>;
  offset?: [OffsetGap, OffsetGap];
}
