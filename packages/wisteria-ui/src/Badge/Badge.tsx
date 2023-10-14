import { Animate } from '../animate';
import { forwardRef, useMemo } from 'preact/compat';
import { BadgeVariant, type BadgeProps } from './interface';
import {
  isArray,
  isNullish,
  combineStyles,
  suffixCssUnit,
  createCssClass,
  combineClassnames,
  type WisteriaUI
} from '@wisteria-ui/utilities';

const [rootClass, clsx] = createCssClass('badge');

export const Badge = forwardRef<
  HTMLSpanElement,
  WisteriaUI.PropsWithHTMLAttrs<BadgeProps>
>(
  (
    {
      count,
      color,
      offset,
      invisible,
      showZero,
      children,
      max = 999,
      variant = BadgeVariant.Standard,
      ...props
    },
    ref
  ) => {
    const isStandardMark = BadgeVariant.Standard === variant;

    const badgeVisible = !(
      invisible ||
      (isStandardMark && !showZero && !count)
    );

    const content = useMemo(() => {
      if (isNullish(count) || !isStandardMark) return null;
      return count >= max ? `${max}+` : count;
    }, [count, max, isStandardMark]);

    const [offsetX, offsetY] = useMemo(() => {
      if (!isArray(offset)) return [];
      return offset.map(value => {
        const _symbol = '-';
        if (value.toString().startsWith(_symbol)) {
          return suffixCssUnit(value).replace(_symbol, '');
        }
        return `${_symbol}${suffixCssUnit(value)}`;
      });
    }, [offset]);

    return (
      <span
        {...props}
        ref={ref}
        className={combineClassnames(rootClass, props.className)}
        style={combineStyles(props.style, {
          '--wisteria-badge-color': color,
          '--wisteria-badge-offset-x': offsetX,
          '--wisteria-badge-offset-y': offsetY
        })}
      >
        {children}
        <span className={clsx('position')}>
          <Animate.Zoom in={badgeVisible} destoryOnClosed={false}>
            <span className={clsx(variant)}>{content}</span>
          </Animate.Zoom>
        </span>
      </span>
    );
  }
);
