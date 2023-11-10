import { Space } from '../Space';
import type { CardTitleProps } from './interface';
import {
  combineStyles,
  createCssClass,
  type WisteriaUI
} from '@wisteria-ui/utilities';

const ICON_SIZE = 40;

const [, clsx] = createCssClass('card');

export const CardTitle: WisteriaUI.Component<CardTitleProps> = ({
  title,
  titleStyle,
  titleNumberOfLines = 1,
  subtitle,
  subtitleStyle,
  subtitleNumberOfLines = 1,
  left,
  leftStyle
}) => {
  return (
    <header className={clsx('header')}>
      {!!left && (
        <div
          className={clsx('header-left')}
          style={combineStyles(
            { width: ICON_SIZE, height: ICON_SIZE },
            leftStyle
          )}
        >
          {left({ size: ICON_SIZE })}
        </div>
      )}
      <Space direction="vertical" align="start" size={4} style={{ flex: 1 }}>
        {!!title && (
          <span
            className={clsx('title', !!titleNumberOfLines && 'title-ellipsis')}
            style={combineStyles(titleStyle, {
              '--title-ellipsis-lines': titleNumberOfLines
            })}
          >
            {title}
          </span>
        )}
        {!!subtitle && (
          <span
            className={clsx(
              'subtitle',
              !!subtitleNumberOfLines && 'subtitle-ellipsis'
            )}
            style={combineStyles(subtitleStyle, {
              '--subtitle-ellipsis-lines': subtitleNumberOfLines
            })}
          >
            {subtitle}
          </span>
        )}
      </Space>
    </header>
  );
};
