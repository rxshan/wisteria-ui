import type { JSX, VNode } from 'preact';
import type {
  Phase,
  TransitionProps as TransitionComponentProps,
  TransitionState
} from 'preact-transitioning/lib/types/Transition';

type CamelCaseToKebabCase<T extends string> =
  T extends `${infer S}${infer Rest}`
    ? S extends Uppercase<S>
      ? `-${Lowercase<S>}${CamelCaseToKebabCase<Rest>}`
      : `${S}${CamelCaseToKebabCase<Rest>}`
    : T;

export type PhaseClass = CamelCaseToKebabCase<Phase>;

export interface TransitionProps
  extends Omit<TransitionComponentProps, 'children' | 'alwaysMounted'> {
  className?: string;
  destoryOnClosed?: boolean;
  children:
    | VNode
    | ((parameter: {
        phase: Phase;
        state: TransitionState;
        phaseClass: PhaseClass;
      }) => JSX.Element);
}

export interface CollapseProps
  extends Omit<TransitionProps, 'className' | 'children'> {
  children: VNode;
  direction?: 'vertical' | 'horizontal';
}

export interface RippleProps {
  color?: string;
  center?: boolean;
  disabled?: boolean;
}
