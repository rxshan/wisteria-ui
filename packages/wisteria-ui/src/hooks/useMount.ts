import { useEffect, useRef } from 'preact/hooks';

export const useMount = (func: () => void) => {
  const funcRef = useRef(func);

  useEffect(() => {
    funcRef.current();
  }, []);
};
