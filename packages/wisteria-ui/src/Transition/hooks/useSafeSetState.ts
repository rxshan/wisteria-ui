import { useUpdateEffect, type Nullable } from '@wisteria-ui/utilities';
import { useCallback, useRef, useState } from 'preact/hooks';

export const useSafeSetState = <S>(initialState: S | (() => S)) => {
  const nextCallbackRef = useRef<Nullable<VoidFunction>>();

  const [state, setState] = useState<S>(initialState);

  const updateState = useCallback(
    (_state: S, callback?: VoidFunction) => {
      nextCallbackRef.current = callback;
      setState(_state);
    },
    [state]
  );

  useUpdateEffect(() => {
    if (!nextCallbackRef.current) return;
    nextCallbackRef.current();
    nextCallbackRef.current = null;
  }, [state]);

  return [state, updateState] as const;
};
