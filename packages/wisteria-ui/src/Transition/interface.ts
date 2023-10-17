import type { JSX, RefObject, VNode } from 'preact';
import type { EnumType, Nullable } from '@wisteria-ui/utilities';

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
  nodeRef?: RefObject<Element>;
  onEnter?: (node: Nullable<Element>, isAppearing?: boolean) => void;
  onEntering?: (node: Nullable<Element>, isAppearing?: boolean) => void;
  onEntered?: (node: Nullable<Element>, isAppearing?: boolean) => void;
  onExit?: (node: Nullable<Element>) => void;
  onExiting?: (node: Nullable<Element>) => void;
  onExited?: (node: Nullable<Element>) => void;
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
  disabled?: boolean;
}
