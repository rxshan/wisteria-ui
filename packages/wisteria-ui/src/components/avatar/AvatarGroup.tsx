import { toChildArray, type FunctionComponent, isValidElement } from 'preact';
import { Avatar } from './Avatar';
import { AvatarContext } from './AvatarContext';
import type { AvatarGroupProps } from './types';
import { createCssClass, isNumber, isString } from '../../utils';

const [selfClass] = createCssClass('avatar-group');

export const AvatarGroup: FunctionComponent<AvatarGroupProps> = ({
  total,
  size,
  variant,
  children,
  maxCount = 5
}) => {
  const childrenArray = toChildArray(children).filter(
    item =>
      isValidElement(item) &&
      !isString(item.type) &&
      item.type.displayName === 'WisAvatar'
  );
  const totalAvatar = total ?? childrenArray.length;
  const isOverMaxCount = isNumber(maxCount) && totalAvatar > maxCount;

  const renderAvatars = childrenArray.slice(
    0,
    isOverMaxCount ? maxCount - 1 : maxCount
  );

  if (isOverMaxCount) {
    const surplus = totalAvatar - maxCount + 1;
    renderAvatars.push(<Avatar>+{surplus}</Avatar>);
  }

  return (
    <div className={selfClass}>
      {renderAvatars.map((item, key) => {
        const zIndex = key + 1;
        return (
          <AvatarContext.Provider
            key={key}
            value={{ size, variant, style: { zIndex } }}
          >
            {item}
          </AvatarContext.Provider>
        );
      })}
    </div>
  );
};
