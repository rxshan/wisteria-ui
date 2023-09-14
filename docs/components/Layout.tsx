import { useEffect } from 'preact/hooks';
import { type FunctionalComponent } from 'preact';
import { ConfigProvider, useWisteriaConfig } from 'wisteria-ui';
import { BROWSER_CACHE_KEY } from '../examples/ConfigProvider';

export const Layout: FunctionalComponent = ({ children }) => {
  const { dispathConfig } = useWisteriaConfig();

  useEffect(() => {
    const data = window.localStorage.getItem(BROWSER_CACHE_KEY);
    if (data) {
      dispathConfig(prevConfig => ({
        ...prevConfig,
        cssVars: JSON.parse(data)
      }));
    }
  }, [dispathConfig]);

  return <ConfigProvider>{children}</ConfigProvider>;
};
