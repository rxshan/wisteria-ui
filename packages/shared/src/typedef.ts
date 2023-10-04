import { type JSX } from 'preact/jsx-runtime';

export type EnumType<E extends string> = `${E}`;

export type Nullable<T> = T | null | undefined;

export type CssClassType<T = string | false> =
  | Nullable<T>
  | Array<Nullable<T>>
  | Record<string, Nullable<T>>;

export type CssStyleType<T = string | number | false> =
  | Nullable<T>
  | JSX.CSSProperties
  | JSX.SignalLike<Nullable<string | JSX.CSSProperties>>
  | Partial<Record<keyof JSX.DOMCSSProperties, Nullable<T>>>;
