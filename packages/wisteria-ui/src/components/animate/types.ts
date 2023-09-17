import type { JSX, VNode } from 'preact';
import type {
  Phase,
  TransitionProps,
  TransitionState
} from 'preact-transitioning/lib/types/Transition';

type CamelCaseToKebabCase<T extends string> =
  T extends `${infer S}${infer Rest}`
    ? S extends Uppercase<S>
      ? `-${Lowercase<S>}${CamelCaseToKebabCase<Rest>}`
      : `${S}${CamelCaseToKebabCase<Rest>}`
    : T;

export type PhaseClass = CamelCaseToKebabCase<Phase>;

export interface AnimateProps
  extends Omit<TransitionProps, 'children' | 'alwaysMounted'> {
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
  extends Omit<AnimateProps, 'className' | 'children'> {
  children: VNode;
}

export interface RippleProps
  extends Omit<AnimateProps, 'children' | 'className'> {
  color?: string;
  disabled?: boolean;
}
