import { Avatar } from '.';
import { AvatarContext } from './AvatarContext';
import type { AvatarGroupProps } from './interface';
import {
  isNumber,
  isString,
  createCssClass,
  type WisteriaUI
} from '@wisteria-ui/utilities';
import { toChildArray, isValidElement } from 'preact';

const [selfClass] = createCssClass('avatar-group');

export const AvatarGroup: WisteriaUI.Component<AvatarGroupProps> = ({
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
      item.type.displayName === 'WisAvatarUI.Avatar'
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
    <AvatarContext.Provider value={{ size, variant }}>
      <div className={selfClass}>{renderAvatars}</div>
    </AvatarContext.Provider>
  );
};
