import type { HTMLAttributes, ForwardFn } from 'preact/compat';
import type {
  JSX,
  VNode,
  Attributes,
  ClassAttributes,
  ComponentChild
} from 'preact';

export namespace WisteriaUI {
  export type Key = string | number | bigint;

  export type Identifier = 'WisteriaUI';

  export type ComponentProps<T extends object> = T & Readonly<Attributes>;

  export interface Component<Props extends object> {
    (props: ComponentProps<Props>, content?: any): VNode<any> | null;
    defaultProps?: Partial<Props>;
    displayName?: `${Identifier}.${string}`;
  }

  export type ElementAttrs<T extends HTMLElement> = {
    [Attr in Exclude<
      keyof HTMLAttributes<T>,
      keyof ClassAttributes<T> | 'children'
    >]?: Exclude<HTMLAttributes<T>[Attr], JSX.SignalLike<any>>;
  };

  export type PropsWithHTMLAttrs<
    Props extends object,
    Element extends HTMLElement = HTMLElement
  > = Omit<ElementAttrs<Element>, keyof Props> &
    ComponentProps<Props> & { children?: ComponentChild };

  export type HTMLComponent<
    Props extends object = object,
    Element extends HTMLElement = HTMLElement
  > = Component<PropsWithHTMLAttrs<Props, Element>>;

  export type HTMLComponentWithRef<
    Props extends object = object,
    RefTarget extends HTMLElement = HTMLElement
  > = ForwardFn<PropsWithHTMLAttrs<Props, RefTarget>, RefTarget> & {
    displayName?: `${Identifier}.${string}`;
  };
}
