import '@wisteria-ui/theme/colors';
import { WisteriaProvider } from './WisteriaProvider';

WisteriaProvider.displayName = 'WisteriaUI.Provider';

export { WisteriaProvider };
export { useTheme } from './ProviderContext';
export type {
  Theme,
  ColorScheme,
  ThemeColors,
  WisteriaProviderProps
} from './interface';
