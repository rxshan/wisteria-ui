import { forwardRef } from 'preact/compat';
import { SurfaceMode, type SurfaceProps } from './interface';
import {
  combineStyles,
  suffixCssUnit,
  createCssClass,
  combineClassnames,
  type WisteriaUI
} from '@wisteria-ui/utilities';

const [rootClass, clsx] = createCssClass('surface');

export const Surface = forwardRef<
  HTMLDivElement,
  WisteriaUI.PropsWithHTMLAttrs<SurfaceProps>
>((props, ref) => {
  const {
    bgColor,
    children,
    corner = 6,
    elevation = 1,
    variant = SurfaceMode.ELEVATED,
    ...attributes
  } = props;

  return (
    <div
      {...attributes}
      ref={ref}
      style={combineStyles(props.style, {
        background: bgColor,
        borderRadius: corner && suffixCssUnit(corner)
      })}
      className={combineClassnames(
        props.className,
        rootClass,
        clsx(variant, {
          [`elevation-${elevation}`]: variant === SurfaceMode.ELEVATED
        })
      )}
    >
      {children}
    </div>
  );
});
