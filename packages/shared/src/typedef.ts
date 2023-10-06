import { type JSX } from 'preact/jsx-runtime';
import type { MutableRefObject } from 'preact/compat';

export type EnumType<E extends string> = `${E}`;

export type Nullable<T> = T | null | undefined;

export type CssClassType<T = string | boolean> =
  | Nullable<T>
  | Array<Nullable<T>>
  | Record<string, Nullable<T>>;

export type CssStyleType<T = string | number | boolean> =
  | Nullable<T>
  | JSX.CSSProperties
  | JSX.SignalLike<Nullable<string | JSX.CSSProperties>>
  | Partial<Record<keyof JSX.DOMCSSProperties, Nullable<T>>>;

export type TargetElement = HTMLElement | Element | Document | Window;

export type BasicTarget<Target extends TargetElement> =
  | Nullable<Target>
  | MutableRefObject<Nullable<Target>>;
