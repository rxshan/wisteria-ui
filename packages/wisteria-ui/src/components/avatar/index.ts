import './style/index.scss';
import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

Avatar.displayName = 'WisAvatar';
AvatarGroup.displayName = 'WisAvatarGroup';

Object.assign(Avatar, { Group: AvatarGroup });

export { Avatar };
export type { AvatarProps } from './types';
