import type { StateUpdater } from 'preact/hooks';
import type { ComponentChild, ErrorInfo } from 'preact';

type Theme = 'light' | 'dark' | 'auto';

type ColorTokens<Color extends string> = `${Color}` | `on-${Color}`;
export type CSSColorVars = Record<
  | 'scrim'
  | 'shadow'
  | 'outline'
  | 'surface-tint'
  | 'inverse-surface'
  | 'inverse-primary'
  | 'outline-variant'
  | 'inverse-on-surface'
  | 'surface-container-highest'
  | ColorTokens<'background'>
  | ColorTokens<'error' | 'error-container'>
  | ColorTokens<'surface' | 'surface-variant'>
  | ColorTokens<'primary' | 'primary-container'>
  | ColorTokens<'tertiary' | 'tertiary-container'>
  | ColorTokens<'secondary' | 'secondary-container'>,
  string
>;

export interface ErrorBoundaryProps {
  fallback?: ComponentChild;
  children?: ComponentChild;
  onError?: (error: any, errorInfo: ErrorInfo) => void;
}

export interface ConfigProviderProps {
  theme?: Theme;
  cssVars?: Partial<CSSColorVars>;
}

export type WisteriaGlobalState = Omit<ConfigProviderProps, 'theme'> &
  Required<Pick<ConfigProviderProps, 'theme'>>;

export interface WisteriaConfigState {
  globalState: WisteriaGlobalState;
  dispathConfig: StateUpdater<WisteriaGlobalState>;
}
