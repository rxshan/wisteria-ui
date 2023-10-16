import useLatest from './useLatest';
import { useRef, useEffect, type EffectCallback } from 'preact/hooks';

export default function useUpdateEffect(
  effect: EffectCallback,
  deps?: ReadonlyArray<unknown>
) {
  const firstRender = useRef(true);
  const effectCallback = useLatest(effect);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      return effectCallback.current();
    }
  }, deps);
}
