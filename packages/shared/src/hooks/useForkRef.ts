import { useMemo } from 'preact/hooks';
import type { Ref, RefCallback } from 'preact';
import { isCallback, isNullish } from '../is';

export default function useForkRef<T>(
  ...refs: Array<Ref<T> | null>
): RefCallback<T> | null {
  return useMemo(() => {
    if (refs.every(isNullish)) return null;
    return instance => {
      refs.forEach(ref => {
        if (isCallback(ref)) {
          ref(instance);
        } else if (!isNullish(ref)) {
          ref.current = instance;
        }
      });
    };
  }, [refs]);
}
