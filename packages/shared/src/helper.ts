import { isNumber } from './is';

export const noop = () => {};

export const suffixCssUnit = (cssValue: string | number, unit = 'px') => {
  if (!isNumber(cssValue)) return cssValue;
  return `${cssValue}${unit}`;
};

export const stringToColor = (str: string) => {
  let hash = 0;
  for (let index = 0; index < str.length; index++) {
    hash = str.charCodeAt(index) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let index = 0; index < 3; index++) {
    const value = (hash >> (index * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
};
