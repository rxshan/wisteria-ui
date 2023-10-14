import type { ComponentChild } from 'preact';
import type { JSX } from 'preact/jsx-runtime';

export interface SpaceProps {
  wrap?: boolean;
  split?: boolean | JSX.Element;
  size?: number | [number, number];
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'center' | 'end' | 'baseline';
  children?: ComponentChild;
}
