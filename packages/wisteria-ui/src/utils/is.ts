export const isString = (val: unknown): val is string => {
  return typeof val === 'string';
};

export const isNumber = (val: unknown): val is number => {
  return typeof val === 'number' && !isNaN(val);
};

export const isArray = (val: unknown): val is Array<unknown> => {
  return Array.isArray(val);
};

export const isObject = (val: unknown): val is object => {
  return val !== null && typeof val === 'object';
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunc = (val: unknown): val is Function => {
  return typeof val === 'function';
};

export const isNullish = (val: unknown): val is null | undefined => {
  return typeof val === 'undefined' || (typeof val === 'object' && !val);
};

export const isTouchEvent = (
  event: TouchEvent | MouseEvent
): event is TouchEvent => {
  return !!(event as TouchEvent).touches?.length;
};
