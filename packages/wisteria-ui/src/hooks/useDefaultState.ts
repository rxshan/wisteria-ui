import { useState } from 'preact/hooks';

export const useDefaultState = <
  State extends object = object,
  DefaultState extends object = object
>(
  state: State,
  defaultState: Partial<State>
) => {
  return useState<State & DefaultState>(() => {
    const _state = Object.fromEntries(
      Object.entries(state).filter(([, value]) => !!value)
    );
    return Object.assign({}, defaultState, _state) as any;
  });
};
