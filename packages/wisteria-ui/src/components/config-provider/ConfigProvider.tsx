import { useContext, useEffect } from 'preact/hooks';
import { createContext, type FunctionalComponent } from 'preact';
import type {
  ConfigProviderProps,
  WisteriaConfigState,
  WisteriaGlobalState
} from './types';
import { useDefaultState } from '../../hooks';
import { isNullish, isObject, noop } from '../../utils';

const CSS_VAR_PREFIX = '--wisteria-color-';

const INITIAL_CONFIG_CONTEXT: WisteriaGlobalState = {
  theme: 'auto'
};

const WisteriaConfigContext = createContext<WisteriaConfigState>({
  globalState: INITIAL_CONFIG_CONTEXT,
  dispathConfig: noop
});

export const useWisteriaConfig = () => {
  const { globalState, dispathConfig } = useContext(WisteriaConfigContext);
  return { ...globalState, dispathConfig };
};

export const ConfigProvider: FunctionalComponent<ConfigProviderProps> = ({
  theme,
  cssVars,
  children
}) => {
  const [state, dispathConfig] = useDefaultState<
    ConfigProviderProps,
    typeof INITIAL_CONFIG_CONTEXT
  >(
    {
      theme,
      cssVars
    },
    INITIAL_CONFIG_CONTEXT
  );

  useEffect(() => {
    let _theme = state.theme;
    const rootElement = document.documentElement;
    rootElement.classList.remove('light', 'dark');

    if (state.theme === 'auto' || isNullish(state.theme)) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery.matches) {
        _theme = 'dark';
      } else {
        _theme = 'light';
      }
    }
    rootElement.classList.add(_theme);
  }, [state.theme]);

  useEffect(() => {
    if (isObject(state.cssVars) && !!Object.keys(state.cssVars).length) {
      const cssColorTokens = Object.entries(state.cssVars).map(
        ([cssVar, colorValue]) => {
          const token = cssVar.replace(
            /([A-Z])/g,
            word => `-${word.toLowerCase()}`
          );
          return `${CSS_VAR_PREFIX + token}: ${colorValue}`;
        }
      );

      document.documentElement.setAttribute('style', cssColorTokens.join(';'));
    }
  }, [state.cssVars]);

  return (
    <WisteriaConfigContext.Provider
      value={{
        dispathConfig,
        globalState: state
      }}
    >
      {children}
    </WisteriaConfigContext.Provider>
  );
};
