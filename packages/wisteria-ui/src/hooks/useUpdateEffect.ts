import { useEffect, type EffectCallback, useRef } from 'preact/hooks';
import { useLatest } from './useLatest';

export const useUpdateEffect = (
  effect: EffectCallback,
  deps?: ReadonlyArray<unknown>
) => {
  const firstRender = useRef(true);
  const effectCallback = useLatest(effect);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectCallback.current();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
