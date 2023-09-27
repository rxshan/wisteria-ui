import { useContext } from 'preact/hooks';
import { createContext } from 'preact';
import type { AvatarGroupProps } from './types';

export const AvatarContext = createContext<Pick<
  AvatarGroupProps,
  'size' | 'variant'
> | null>(null);

export const useAvatarGroupContext = () => {
  return useContext(AvatarContext);
};
