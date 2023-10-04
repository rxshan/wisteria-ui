import type { DividerProps } from './types';
import { isValidElement, type FunctionComponent } from 'preact';
import {
  isNullish,
  isNumber,
  suffixCssUnit,
  combineStyles,
  createCssClass,
  combineClassnames
} from '@wisteria-ui/shared';

const [selfClass, classnames] = createCssClass('divider');

export const Divider: FunctionComponent<DividerProps> = ({
  style,
  dashed,
  children,
  insetSize,
  className,
  textAlign = 'center',
  variant = 'fullWidth',
  direction = 'horizontal'
}) => {
  const renderChildren = () => {
    if (isNullish(children)) return null;
    if (isValidElement(children)) return children;
    return <span className={classnames('text')}>{children}</span>;
  };
  return (
    <div
      role="separator"
      data-variant={variant}
      className={combineClassnames(
        className,
        selfClass,
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
        style
      )}
    >
      {renderChildren()}
    </div>
  );
};
