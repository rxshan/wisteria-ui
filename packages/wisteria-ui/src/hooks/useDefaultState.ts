import { useState } from 'preact/hooks';

export const useDefaultState = <
  State extends object = object,
  DefaultState extends object = object
>(
  state: State,
  defaultState: Partial<State>
) => {
  return useState<State & DefaultState>(() => {
    const _defaultState = Object.fromEntries(
      Object.entries(defaultState).filter(([, value]) => !!value)
    );
    return Object.assign({}, state, _defaultState) as any;
  });
};
