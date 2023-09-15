import { type JSX } from 'preact/jsx-runtime';
import { isNumber, isObject, isString, isArray } from './is';

type JSXStyleType =
  | null
  | false
  | string
  | undefined
  | JSX.CSSProperties
  | JSX.SignalLike<string | JSX.CSSProperties | undefined>;

export const combineStyles = (...styles: JSXStyleType[]): JSX.CSSProperties => {
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

export const suffixCssUnit = (cssValue: string | number, unit = 'px') => {
  if (isNumber(cssValue)) {
    return `${cssValue}${unit}`;
  }
  return cssValue.replace(/(\d+).*?/g, (_, size) => `${size}${unit}`);
};

type BasicClassType = null | false | undefined | string;
type JSXClassType =
  | BasicClassType
  | BasicClassType[]
  | Record<string, BasicClassType>;

const createPrefixClasses = (
  prefixClass: string,
  ...classnames: JSXClassType[]
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

export const createCssClass = (prefix: string, identify = 'wisteria') => {
  const prefixClass = `${identify}-${prefix}`;
  return [
    prefixClass,
    (...classes: JSXClassType[]) => {
      return combineClassnames(...createPrefixClasses(prefixClass, ...classes));
    }
  ] as const;
};
