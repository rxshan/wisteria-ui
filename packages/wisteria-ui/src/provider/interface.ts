import type { ComponentChild, ErrorInfo } from 'preact';

export type ColorScheme = 'light' | 'dark';

type ColorTokens<Color extends string> = `${Color}` | `on${Capitalize<Color>}`;

export type ThemeColors = Record<
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
  onError?: (error: any, errorInfo: ErrorInfo) => void;
}

export type Theme = {
  scheme: ColorScheme;
  colors: ThemeColors;
};

export interface WisteriaProviderProps extends ErrorBoundaryProps {
  theme?: Partial<Theme>;
}
