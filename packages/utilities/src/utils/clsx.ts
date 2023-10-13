import { type JSX } from 'preact/jsx-runtime';
import { isArray, isObject, isString } from './is';
import type { CssClassType, CssStyleType } from './typedef';

const _createPrefixClasses = (
  prefixClass: string,
  ...classnames: CssClassType[]
) => {
  return classnames
    .map(cn => {
      if (!cn) return cn;
      if (isString(cn)) return `${prefixClass}-${cn}`;
      if (isArray(cn)) {
        return cn.map(name => !!name && `${prefixClass}-${name}`);
      }
      return Object.entries(cn).map(([name, status]) => {
        if (!status) return '';
        return `${prefixClass}-${name}`;
      });
    })
    .flat(1);
};

export const combineClassnames = (...classnames: unknown[]) => {
  return classnames.filter(Boolean).join(' ');
};

export const createCssClass = (prefix: string, identify = 'wisteria') => {
  const prefixClass = `${identify}-${prefix}`;
  return [
    prefixClass,
    (...classes: CssClassType[]) => {
      return combineClassnames(
        ..._createPrefixClasses(prefixClass, ...classes)
      );
    }
  ] as const;
};

export const combineStyles = (...styles: CssStyleType[]): JSX.CSSProperties => {
  const cssStyles = styles.map(style => {
    if (!isString(style)) {
      if (isObject(style)) {
        return Object.fromEntries(Object.entries(style).filter(([, v]) => !!v));
      }
      return Object.create(null);
    }

    const matchStyles = Array.from(style.matchAll(/^[a-z-]*:\s*\w+;?/g)).map(
      inlineStyle => {
        const [cssAttr, cssValue] = inlineStyle
          .toString()
          .replace(';', '')
          .split(':');

        const jsxCssAttr = cssAttr.replace(/-(\w)/g, (_, $1) => {
          return $1.toUpperCase();
        });
        return [jsxCssAttr, cssValue];
      }
    );
    return Object.fromEntries(matchStyles);
  });
  return Object.assign({}, ...cssStyles);
};
