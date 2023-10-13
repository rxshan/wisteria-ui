import { useCheckImage } from './useCheckImage';
import { type FunctionComponent } from 'preact';
import { AvatarSize, type AvatarProps } from './types';
import { useAvatarGroupContext } from './AvatarContext';
import { useEffect, useMemo, useRef } from 'preact/hooks';
import {
  isNumber,
  suffixCssUnit,
  combineStyles,
  createCssClass,
  combineClassnames
} from '@wisteria-ui/utilities';

const [selfClass, clsx] = createCssClass('avatar');

const AVATAR_SIZE_MAP = {
  [AvatarSize.Small]: 24,
  [AvatarSize.Normal]: 40,
  [AvatarSize.Large]: 56
};

export const Avatar: FunctionComponent<AvatarProps> = ({
  style,
  color,
  children,
  size = 'normal',
  variant = 'circle',
  ...props
}) => {
  const childRef = useRef<HTMLSpanElement>(null);
  const [hasImage, loadStatus] = useCheckImage(props);

  const context = useAvatarGroupContext();

  const avatarShape = context?.variant ?? variant;
  const avatarSize = useMemo(() => {
    const _size = context?.size ?? size;
    if (isNumber(_size)) return _size;
    return AVATAR_SIZE_MAP[_size] ?? AVATAR_SIZE_MAP['normal'];
  }, [size, context?.size]);

  useEffect(() => {
    if (childRef.current && avatarSize) {
      const textWidth = childRef.current.clientWidth;
      const textScaleRatio = avatarSize / (textWidth + 16);

      if (textScaleRatio < 1) {
        childRef.current.style.transform = `scale(${textScaleRatio})`;
      }
    }
  }, [avatarSize, children]);

  const isRenderImage = hasImage && loadStatus === 'loaded';
  const isRenderTextOrNode = !hasImage || loadStatus === 'error';

  return (
    <div
      className={combineClassnames(
        selfClass,
        clsx(avatarShape, !isRenderTextOrNode && 'with-image')
      )}
      style={combineStyles(style, {
        '--wisteria-avatar-color': color,
        '--wisteria-avatar-size': suffixCssUnit(avatarSize),
        '--wisteria-avatar-offset': context && suffixCssUnit(-avatarSize / 4)
      })}
    >
      {!!isRenderImage && <img {...props} className={clsx('image')} />}
      {!!isRenderTextOrNode && (
        <span ref={childRef} className={clsx('with-child')}>
          {children ?? props.alt}
        </span>
      )}
    </div>
  );
};
