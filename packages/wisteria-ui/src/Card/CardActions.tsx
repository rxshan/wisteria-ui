import {
  combineStyles,
  createCssClass,
  combineClassnames,
  type WisteriaUI
} from '@wisteria-ui/utilities';
import type { CardActionsProps } from './interface';

const [rootClass] = createCssClass('card-actions');

export const CardActions: WisteriaUI.HTMLComponent<CardActionsProps> = ({
  style,
  className,
  children,
  placement = 'left'
}) => {
  const alignRight = placement === 'right';
  return (
    <div
      style={combineStyles(style, {
        justifyContent: alignRight ? 'flex-end' : 'flex-start'
      })}
      className={combineClassnames(className, rootClass)}
    >
      {children}
    </div>
  );
};
