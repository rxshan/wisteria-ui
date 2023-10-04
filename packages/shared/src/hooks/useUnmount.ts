import useLatest from './useLatest';
import { useEffect } from 'preact/hooks';

export default function useUnmount(callback: VoidFunction) {
  const funcRef = useLatest(callback);

  useEffect(() => {
    return () => {
      funcRef.current();
    };
  }, []);
}
