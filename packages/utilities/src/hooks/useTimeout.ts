import { useCallback, useEffect, useRef } from 'preact/hooks';
import useLatest from './useLatest';
import { isNullish } from '../utils/is';

export default function useTimeout(func: VoidFunction, delay?: number) {
  const timer = useRef<NodeJS.Timeout>();
  const callbackRef = useLatest(func);

  const clear = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = undefined;
    }
  }, []);

  useEffect(() => {
    if (isNullish(delay)) {
      return clear();
    }
    timer.current = setTimeout(callbackRef.current, delay);
    return clear;
  }, [delay]);

  return timer.current;
}
