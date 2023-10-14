import './style/index.scss';
import { Avatar as UIAvatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';
import { forwardRef } from 'preact/compat';

const Avatar = Object.assign(forwardRef(UIAvatar), { Group: AvatarGroup });
Avatar.displayName = 'WisteriaUI.Avatar';
AvatarGroup.displayName = 'WisteriaUI.AvatarGroup';

export { Avatar };
export type { AvatarProps } from './interface';
