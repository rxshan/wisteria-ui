import type { FunctionComponent } from 'preact';
import {
  combineStyles,
  suffixCssUnit,
  createCssClass,
  combineClassnames
} from '@wisteria-ui/utilities';
import type { PaperProps } from './interface';

const [rootClass, clsx] = createCssClass('paper');

export const Paper: FunctionComponent<PaperProps> = ({
  corner = 6,
  elevation = 1,
  variant = 'elevation',
  ...props
}) => {
  return (
    <div
      style={combineStyles(props.style, {
        width: props.width,
        height: props.height,
        borderRadius: corner && suffixCssUnit(corner)
      })}
      className={combineClassnames(
        rootClass,
        clsx(variant, {
          [`elevation-${elevation}`]: variant === 'elevation'
        })
      )}
    >
      {props.children}
    </div>
  );
};
