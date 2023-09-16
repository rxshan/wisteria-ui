import type { ComponentChild } from 'preact';
import type { TransitionProps } from 'preact-transitioning/lib/types/Transition';

export interface AnimateProps
  extends Omit<TransitionProps, 'children' | 'alwaysMounted'> {
  destoryOnClosed?: boolean;
  children: ComponentChild;
}
