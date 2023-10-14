import { Divider } from '../divider';
import { useMemo } from 'preact/hooks';
import { forwardRef } from 'preact/compat';
import type { SpaceProps } from './interface';
import { toChildArray, Fragment } from 'preact';
import {
  isArray,
  isBoolean,
  combineStyles,
  createCssClass,
  combineClassnames,
  type WisteriaUI
} from '@wisteria-ui/utilities';

const [rootClass, clsx] = createCssClass('space');

export const Space = forwardRef<
  HTMLDivElement,
  WisteriaUI.PropsWithHTMLAttrs<SpaceProps>
>(
  (
    {
      wrap,
      split,
      children,
      size = 6,
      align = 'center',
      direction = 'horizontal',
      ...props
    },
    ref
  ) => {
    const childArray = toChildArray(children);

    const [rowGap, columnGap] = useMemo(() => {
      if (isArray(size)) return size;
      return [size, size];
    }, [size]);

    return (
      <div
        {...props}
        ref={ref}
        style={combineStyles(props.style, {
          rowGap,
          columnGap
        })}
        className={combineClassnames(
          rootClass,
          props.className,
          clsx(align, direction, { wrap })
        )}
      >
        {childArray.map((child, key) => {
          const notTailNode = key !== childArray.length - 1;
          let separator = notTailNode && split;

          if (separator && isBoolean(separator)) {
            const isVertical = direction === 'vertical';
            separator = (
              <Divider direction={isVertical ? 'horizontal' : 'vertical'} />
            );
          }
          return (
            <Fragment key={key}>
              <div className={clsx('item')}>{child}</div>
              {separator}
            </Fragment>
          );
        })}
      </div>
    );
  }
);
