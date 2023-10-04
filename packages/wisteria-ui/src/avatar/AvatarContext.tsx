import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import type { AvatarGroupProps } from './types';

export const AvatarContext = createContext<Pick<
  AvatarGroupProps,
  'size' | 'variant'
> | null>(null);

export const useAvatarGroupContext = () => {
  return useContext(AvatarContext);
};
