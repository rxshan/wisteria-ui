import type { StateUpdater } from 'preact/hooks';
import type { ComponentChild, ErrorInfo } from 'preact';

export type Theme = 'light' | 'dark' | 'auto';

type ColorTokens<Color extends string> = `${Color}` | `on${Capitalize<Color>}`;

export type CSSColorVars = Record<
  | 'scrim'
  | 'shadow'
  | 'outline'
  | 'surfaceTint'
  | 'inverseSurface'
  | 'inversePrimary'
  | 'outlineVariant'
  | 'inverseOnSurface'
  | 'surfaceContainerHighest'
  | ColorTokens<'background'>
  | ColorTokens<'error' | 'errorContainer'>
  | ColorTokens<'surface' | 'surfaceVariant'>
  | ColorTokens<'primary' | 'primaryContainer'>
  | ColorTokens<'tertiary' | 'tertiaryContainer'>
  | ColorTokens<'secondary' | 'secondaryContainer'>,
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
