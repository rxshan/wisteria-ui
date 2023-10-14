import type { ColorScheme } from '../interface';
import { isBrowser } from '@wisteria-ui/utilities';
import { useEffect, useState } from 'preact/hooks';

const MEDIA_QUERY_RULE = '(prefers-color-scheme: light)';

const getDefaultColorScheme = (theme?: ColorScheme): ColorScheme => {
  if (!isBrowser || theme) {
    return theme ?? 'light';
  }
  const mediaQuery = window.matchMedia(MEDIA_QUERY_RULE);
  mediaQuery.addEventListener;
  return mediaQuery.matches ? 'light' : 'dark';
};

export const useColorScheme = (colorScheme?: ColorScheme) => {
  const [systemColorScheme, setSystemColorScheme] = useState(
    getDefaultColorScheme(colorScheme)
  );

  const _colorScheme = colorScheme ?? systemColorScheme;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add(_colorScheme);
    root.style.setProperty('color-scheme', _colorScheme);
  }, [_colorScheme]);

  useEffect(() => {
    const handler = (event: MediaQueryListEvent) => {
      setSystemColorScheme(event.matches ? 'light' : 'dark');
    };

    const mediaQuery = window.matchMedia(MEDIA_QUERY_RULE);
    mediaQuery.addEventListener('change', handler);
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  return _colorScheme;
};
