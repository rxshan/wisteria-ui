import type { Ref, RefCallback } from 'preact';
import type { Nullable } from '../typings';
import { isCallback, isObject } from './is';

export const mergeRefs = <RefTarget>(
  refs: Array<Nullable<Ref<RefTarget>>>
): Nullable<RefCallback<RefTarget>> => {
  return value => {
    for (const ref of refs) {
      if (isCallback(ref)) {
        ref(value);
      } else if (isObject(ref) && 'current' in ref) {
        ref.current = value;
      }
    }
  };
};
