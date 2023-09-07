import { type JSX } from 'preact/jsx-runtime';
import { isNumber, isObject, isString, isArray } from './is';

type JSXStyleStyle = string | false | undefined | null | JSX.CSSProperties;

export const combineStyles = (
  ...styles: JSXStyleStyle[]
): JSX.CSSProperties => {
  const cssStyles = styles.map(style => {
    if (isObject(style) || !isString(style)) {
      return style ?? Object.create(null);
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

export const combineClassnames = (...classnames: unknown[]) => {
  return classnames.filter(Boolean).join(' ');
};

type BasicClassType = null | false | undefined | string;
type JSXClassType =
  | BasicClassType
  | BasicClassType[]
  | Record<string, BasicClassType>;

export const createPrefixClass = (prefix: string, identify = 'wisteria') => {
  const prefixClass = `${identify}-${prefix}`;

  return (...classnames: JSXClassType[]) => {
    if (!classnames.length) return prefixClass;
    const classes = classnames
      .map(cn => {
        if (!cn) return cn;
        if (isString(cn)) return `${prefixClass}-${cn}`;
        if (isArray(cn)) {
          return cn.map(name => !!name && `${prefixClass}-${name}`);
        }
        return Object.entries(cn).map((name, status) => {
          if (!status) return '';
          return `${prefixClass}-${name}`;
        });
      })
      .flat(1);
    return combineClassnames(...classes);
  };
};

export const suffixCssUnit = (cssValue: string | number, unit = 'px') => {
  if (isNumber(cssValue)) {
    return `${cssValue}${unit}`;
  }
  return cssValue.replace(/(\d+).*?/g, (_, size) => `${size}${unit}`);
};
