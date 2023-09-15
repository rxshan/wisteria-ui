import { forwardRef, useMemo, type PropsWithChildren } from 'preact/compat';
import { BadgeVariant, type BadgeProps } from './types';
import {
  isNullish,
  combineStyles,
  createCssClass,
  combineClassnames,
  suffixCssUnit
} from '../../utils';

const [selfClass, clsx] = createCssClass('badge');

export const Badge = forwardRef<HTMLElement, PropsWithChildren<BadgeProps>>(
  (
    {
      count,
      style,
      color,
      invisible,
      showZero,
      children,
      className,
      max = 999,
      offset = [],
      variant = BadgeVariant.Standard
    },
    ref
  ) => {
    const [offsetX, offsetY] = offset;
    const isStandardMark = BadgeVariant.Standard === variant;

    const badgeVisible = !(
      invisible ||
      (isStandardMark && !showZero && !count)
    );

    const content = useMemo(() => {
      if (isNullish(count) || !isStandardMark) return null;
      return count >= max ? `${max}+` : count;
    }, [count, max, isStandardMark]);

    return (
      <span
        ref={ref}
        className={combineClassnames(selfClass, className)}
        style={combineStyles(style, {
          '--wisteria-badge-color': color,
          '--wisteria-badge-offset-x': offsetX && suffixCssUnit(-offsetX, 'px'),
          '--wisteria-badge-offset-y': offsetY && suffixCssUnit(-offsetY, 'px')
        })}
      >
        {children}
        <span data-visible={badgeVisible} className={clsx(variant)}>
          {content}
        </span>
      </span>
    );
  }
);
