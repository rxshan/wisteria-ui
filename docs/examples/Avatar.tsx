import type { FunctionalComponent } from 'preact';
import { Avatar, type AvatarProps } from 'wisteria-ui';

export const AvatarWithImage: FunctionalComponent<AvatarProps> = props => {
  return (
    <Avatar
      {...props}
      src="https://images.pexels.com/photos/18077636/pexels-photo-18077636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    />
  );
};
