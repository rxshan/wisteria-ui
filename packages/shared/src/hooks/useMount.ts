import { useEffect } from 'preact/hooks';

export default function useMount(callback: VoidFunction) {
  useEffect(() => {
    callback();
  }, []);
}
