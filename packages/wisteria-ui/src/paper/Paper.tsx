import { forwardRef } from 'preact/compat';
import type { PaperProps } from './interface';
import {
  combineStyles,
  suffixCssUnit,
  createCssClass,
  combineClassnames,
  type WisteriaUI
} from '@wisteria-ui/utilities';

const [rootClass, clsx] = createCssClass('paper');

export const Paper = forwardRef<
  HTMLDivElement,
  WisteriaUI.PropsWithHTMLAttrs<PaperProps>
>(({ corner = 6, elevation = 1, variant = 'elevation', ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      style={combineStyles(props.style, {
        width: props.width,
        height: props.height,
        borderRadius: corner && suffixCssUnit(corner)
      })}
      className={combineClassnames(
        props.className,
        rootClass,
        clsx(variant, {
          [`elevation-${elevation}`]: variant === 'elevation'
        })
      )}
    >
      {props.children}
    </div>
  );
});
