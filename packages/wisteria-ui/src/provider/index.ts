import '../theme/colors/index.css';
import { WisteriaProvider } from './WisteriaProvider';

WisteriaProvider.displayName = 'WisteriaProvider';

export { WisteriaProvider };
export { useTheme } from './ProviderContext';
export type {
  Theme,
  ColorScheme,
  ThemeColors,
  WisteriaProviderProps
} from './interface';
