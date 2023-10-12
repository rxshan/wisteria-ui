import { Divider } from '../divider';
import { useMemo } from 'preact/hooks';
import type { SpaceProps } from './interface';
import { toChildArray, type FunctionComponent, Fragment } from 'preact';
import {
  isArray,
  isBoolean,
  combineStyles,
  createCssClass,
  combineClassnames
} from '@wisteria-ui/shared';

const [rootClass, clsx] = createCssClass('space');

export const Space: FunctionComponent<SpaceProps> = ({
  wrap,
  split,
  children,
  size = 6,
  align = 'center',
  direction = 'horizontal'
}) => {
  const childArray = toChildArray(children);

  const [rowGap, columnGap] = useMemo(() => {
    if (isArray(size)) return size;
    return [size, size];
  }, [size]);

  return (
    <div
      style={combineStyles({
        rowGap,
        columnGap
      })}
      className={combineClassnames(rootClass, clsx(align, direction, { wrap }))}
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
};
