import { ErrorBoundary } from './ErrorBoundary';
import type { FunctionComponent } from 'preact';
import { useThemeColors } from './hooks/useThemeColors';
import { useColorScheme } from './hooks/useColorScheme';
import type { WisteriaProviderProps } from './interface';
import { WisteriaProviderContext } from './ProviderContext';

export const WisteriaProvider: FunctionComponent<WisteriaProviderProps> = ({
  theme,
  ...props
}) => {
  const colorScheme = useColorScheme(theme?.scheme);
  const themeColors = useThemeColors(colorScheme, theme?.colors);

  return (
    <WisteriaProviderContext.Provider
      value={{ theme: { colors: themeColors, scheme: colorScheme } }}
    >
      <ErrorBoundary fallback={props.fallback} onError={props.onError}>
        {props.children}
      </ErrorBoundary>
    </WisteriaProviderContext.Provider>
  );
};
