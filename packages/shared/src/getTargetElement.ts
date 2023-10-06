import { isBrowser, isObject } from './is';
import type { BasicTarget, Nullable, TargetElement } from './typedef';

export const getTargetElement = (
  target?: BasicTarget<TargetElement>,
  defaultElement?: TargetElement
): Nullable<TargetElement> => {
  if (!isBrowser) return undefined;
  if (!target) return defaultElement;
  if (isObject(target) && 'current' in target) {
    return target.current;
  }
  return target;
};
