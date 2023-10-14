import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import type { RadioContextState } from './interface';
import type { PropsWithChildren } from 'preact/compat';
import type { WisteriaUI } from '@wisteria-ui/utilities';

const INITIAL_STATE = {};

export const RadioContext = createContext<{
  state: RadioContextState;
  group: boolean;
}>({ state: INITIAL_STATE, group: false });

export const useRadioGroupContext = () => {
  return useContext(RadioContext);
};

export const RadioContextProvider: WisteriaUI.Component<
  PropsWithChildren<{
    state?: RadioContextState;
  }>
> = ({ children, state = INITIAL_STATE }) => {
  return (
    <RadioContext.Provider value={{ state, group: true }}>
      {children}
    </RadioContext.Provider>
  );
};
