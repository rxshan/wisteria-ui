import { useEffect } from 'preact/hooks';

export default function useMount(callback: () => void) {
  useEffect(() => {
    callback();
  }, []);
}
