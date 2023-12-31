import { isBrowser } from '@wisteria-ui/utilities';
import { useMemo, useState } from 'preact/hooks';
import type { ColorScheme, ThemeColors } from '../interface';

declare global {
  interface CSSRule {
    selectorText: string;
  }
}

const COLOR_VAR_PREFIX = '--m3-color-';

const getDefaultStaticColors = () => {
  const darkColors: ThemeColors = Object.create(null);
  const lightColors: ThemeColors = Object.create(null);

  if (!isBrowser) {
    return {
      dark: darkColors,
      light: lightColors
    };
  }
  const styleSheets = Array.from(document.styleSheets);

  for (const styleSheet of styleSheets) {
    if (!styleSheet.cssRules?.length || styleSheet.type !== 'text/css') {
      continue;
    }
    for (const cssRule of Array.from(styleSheet.cssRules)) {
      if (!cssRule.cssText.startsWith(':root')) {
        continue;
      }
      const colorsText = cssRule.cssText
        .replace(cssRule.selectorText, '')
        .replace(/(--.*?):\s*(.*?);/g, (_, cssVar, colorValue) => {
          if (!cssVar.startsWith(COLOR_VAR_PREFIX)) {
            return '';
          }
          const colorKey = cssVar
            .replace(COLOR_VAR_PREFIX, '')
            .replace(/-(\w)/g, (__: string, word: string) =>
              word.toUpperCase()
            );
          return `"${colorKey}": "${colorValue}",`;
        })
        .replace(/(,)\s*}\s*$/, '}');

      try {
        const themeColors = JSON.parse(colorsText);
        const isDark = cssRule.selectorText.indexOf('dark') !== -1;

        Object.assign(isDark ? darkColors : lightColors, themeColors);
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(
            '[Parse ThemeColors] :root pesudo element contains only css variables'
          );
        }
      }
    }
  }

  return {
    dark: darkColors,
    light: lightColors
  };
};

export const useThemeColors = (
  colorScheme: ColorScheme,
  dynamicColors?: Partial<ThemeColors>
) => {
  const [colorsMap] = useState(getDefaultStaticColors);

  return useMemo<ThemeColors>(() => {
    const themeColors = colorsMap[colorScheme];
    if (dynamicColors) {
      return {
        ...themeColors,
        ...dynamicColors
      };
    }
    return themeColors;
  }, [colorScheme, dynamicColors]);
};
