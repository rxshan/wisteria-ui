import { useRef } from 'preact/hooks';

export default function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}
