import { Surface } from '../Surface';
import { forwardRef } from 'preact/compat';
import type { CardProps } from './interface';
import {
  createCssClass,
  type WisteriaUI,
  combineClassnames
} from '@wisteria-ui/utilities';

const [rootClass] = createCssClass('card');

export const Card = forwardRef<
  HTMLDivElement,
  WisteriaUI.PropsWithHTMLAttrs<CardProps>
>((props, ref) => {
  const { variant, children, className, ...attributes } = props;
  return (
    <Surface
      {...attributes}
      ref={ref}
      variant={variant}
      className={combineClassnames(className, rootClass)}
    >
      {children}
    </Surface>
  );
});
