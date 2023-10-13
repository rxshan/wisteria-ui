import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import type { Theme } from './interface';
import type { Nullable } from '@wisteria-ui/utilities';

export const WisteriaProviderContext =
  createContext<Nullable<{ theme: Theme }>>(null);

export const useTheme = () => {
  const context = useContext(WisteriaProviderContext);

  if (!context) {
    throw new Error('useTheme must be used within a WisteriaProvider');
  }
  return context.theme;
};
