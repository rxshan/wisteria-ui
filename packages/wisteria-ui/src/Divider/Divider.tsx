import { isValidElement } from 'preact';
import { forwardRef } from 'preact/compat';
import type { DividerProps } from './interface';
import {
  isNullish,
  isNumber,
  suffixCssUnit,
  combineStyles,
  createCssClass,
  combineClassnames,
  type WisteriaUI
} from '@wisteria-ui/utilities';

const [rootClass, classnames] = createCssClass('divider');

export const Divider = forwardRef<
  HTMLDivElement,
  WisteriaUI.PropsWithHTMLAttrs<DividerProps>
>(
  (
    {
      dashed,
      children,
      insetSize,
      textAlign = 'center',
      variant = 'fullWidth',
      direction = 'horizontal',
      ...props
    },
    ref
  ) => {
    const renderChildren = () => {
      if (isNullish(children)) return null;
      if (isValidElement(children)) return children;
      return <span className={classnames('text')}>{children}</span>;
    };
    return (
      <div
        ref={ref}
        role="separator"
        data-variant={variant}
        className={combineClassnames(
          rootClass,
          props.className,
          classnames(
            direction,
            !!children && ['with-children', `text-${textAlign}`]
          )
        )}
        style={combineStyles(
          !!dashed && {
            borderStyle: 'dashed'
          },
          isNumber(insetSize) && {
            '--divider-inset-size': suffixCssUnit(insetSize)
          },
          props.style
        )}
      >
        {renderChildren()}
      </div>
    );
  }
);
