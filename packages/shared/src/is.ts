export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !isNaN(value);
};

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean';
};

export const isArray = (value: unknown): value is Array<unknown> => {
  return Array.isArray(value);
};

export const isObject = (value: unknown): value is object => {
  return value !== null && typeof value === 'object';
};

export const isNullish = (value: unknown): value is null | undefined => {
  return typeof value === 'undefined' || (typeof value === 'object' && !value);
};

export const isCallback = (
  value: unknown
): value is (...args: any[]) => any => {
  return typeof value === 'function';
};

export const isTouchEvent = (
  event: TouchEvent | MouseEvent
): event is TouchEvent => {
  return event.constructor.name === 'TouchEvent';
};

export const isBrowser = typeof window !== 'undefined';
