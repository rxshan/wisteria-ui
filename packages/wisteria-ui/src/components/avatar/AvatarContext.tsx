import { useContext } from 'preact/hooks';
import { createContext, type JSX } from 'preact';
import type { AvatarGroupProps } from './types';

export type AvatarContextState = {
  style?: JSX.CSSProperties;
} & Pick<AvatarGroupProps, 'size' | 'variant'>;

export const AvatarContext = createContext<AvatarContextState | null>(null);

export const useAvatarGroupContext = () => {
  return useContext(AvatarContext);
};
