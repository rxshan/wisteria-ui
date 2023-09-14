import type { Ref, RefCallback } from 'preact';
import { useMemo } from 'preact/hooks';
import { isFunc, isNullish } from '../utils';

export const useForkRef = <T>(
  ...refs: Array<Ref<T> | null>
): RefCallback<T> | null => {
  return useMemo(() => {
    if (refs.every(isNullish)) return null;
    return instance => {
      refs.forEach(ref => {
        if (isFunc(ref)) {
          ref(instance);
        } else if (!isNullish(ref)) {
          ref.current = instance;
        }
      });
    };
  }, [refs]);
};
