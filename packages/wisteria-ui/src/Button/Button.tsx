import { forwardRef } from 'preact/compat';
import { Transition } from '../Transition';
import type { ButtonProps } from './interface';
import {
  createCssClass,
  combineClassnames,
  type WisteriaUI,
  combineStyles
} from '@wisteria-ui/utilities';

const [rootClass, clsx] = createCssClass('button');

export const Button = forwardRef<
  HTMLButtonElement,
  WisteriaUI.PropsWithHTMLAttrs<ButtonProps>
>(
  (
    { block, color, corner = 'rounded', variant = 'elevated', ...props },
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={combineClassnames(
          rootClass,
          props.className,
          clsx(`corner-${corner}`, variant)
        )}
        style={combineStyles(props.style, {
          width: block && '100%',
          '--button-color': color
        })}
      >
        <span className={clsx('content')}>{props.children}</span>
        <span className={clsx('state-layer')} />
        <Transition.Ripple />
      </button>
    );
  }
);
