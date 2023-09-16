import { forwardRef, useMemo, type PropsWithChildren } from 'preact/compat';
import { BadgeVariant, type BadgeProps } from './types';
import {
  isNullish,
  combineStyles,
  createCssClass,
  combineClassnames,
  suffixCssUnit,
  isArray
} from '../../utils';
import { Animate } from '../animate';

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
      offset,
      variant = BadgeVariant.Standard
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
        ref={ref}
        className={combineClassnames(selfClass, className)}
        style={combineStyles(style, {
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
