import { useRef } from 'preact/hooks';

export const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;

  return ref;
};
