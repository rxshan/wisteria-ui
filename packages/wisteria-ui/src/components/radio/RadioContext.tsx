import { createContext, type FunctionalComponent } from 'preact';
import type { RadioContextState } from './types';
import { useContext } from 'preact/hooks';

const INITIAL_STATE = {};

export const RadioContext = createContext<{
  state: RadioContextState;
  group: boolean;
}>({ state: INITIAL_STATE, group: false });

export const useRadioGroupContext = () => {
  return useContext(RadioContext);
};

export const RadioContextProvider: FunctionalComponent<{
  state?: RadioContextState;
}> = ({ children, state = INITIAL_STATE }) => {
  return (
    <RadioContext.Provider value={{ state, group: true }}>
      {children}
    </RadioContext.Provider>
  );
};
