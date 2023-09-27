import './style/index.scss';
import { Avatar as _Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

const Avatar = Object.assign(_Avatar, { Group: AvatarGroup });

Avatar.displayName = 'WisAvatar';
AvatarGroup.displayName = 'WisAvatarGroup';

export { Avatar };
export type { AvatarProps } from './types';
