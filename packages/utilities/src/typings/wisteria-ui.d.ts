import type { Attributes, VNode } from 'preact';
import type { HTMLAttributes } from 'preact/compat';

declare namespace WisteriaUI {
  export type Key = string | number | bigint;

  export type Identifier = 'WisteriaUI';

  export interface Component<Element extends HTMLElement = HTMLElement>
    extends HTMLAttributes<Element> {}

  export interface FC<Props extends object> {
    (props: Props & Readonly<Attributes>, content?: any): VNode<Props> | null;
    defaultProps?: Partial<Props>;
    displayName?: `${Identifier}${string}`;
  }
}
