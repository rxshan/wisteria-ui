import { Fragment, type FunctionComponent } from 'preact';
import { useRootCSSVars } from './ThemeContext';

export const ConfigProvider: FunctionComponent = ({ children }) => {
  useRootCSSVars();
  return <Fragment>{children}</Fragment>;
};
