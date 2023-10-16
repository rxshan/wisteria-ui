import type { EnumType } from '@wisteria-ui/utilities';
import type { JSX, VNode } from 'preact';

export enum PhaseStatus {
  EXITED = 'exited',
  EXITING = 'exiting',
  ENTERED = 'entered',
  ENTERING = 'entering'
}

export type TransitionTimeout =
  | number
  | Partial<Record<'exit' | 'enter' | 'appear', number>>;

export interface TransitionProps {
  in?: boolean;
  exit?: boolean;
  enter?: boolean;
  appear?: boolean;
  unmountOnExit?: boolean;
  timeout?: TransitionTimeout;
  onEnter?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
  children: VNode | ((status: EnumType<PhaseStatus>) => JSX.Element);
}

export interface CollapseProps
  extends Omit<TransitionProps, 'children' | 'timeout'> {
  children: VNode;
  timeout?: number;
  direction?: 'vertical' | 'horizontal';
}

export interface RippleProps {
  color?: string;
  center?: boolean;
  disabled?: boolean;
}
