import useLatest from './useLatest';
import { useEffect } from 'preact/hooks';
import type { VoidCallback } from '../typedef';

export default function useUnmount(callback: VoidCallback) {
  const funcRef = useLatest(callback);

  useEffect(() => {
    return () => {
      funcRef.current();
    };
  }, []);
}
