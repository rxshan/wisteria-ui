import { type FunctionalComponent } from 'preact';
import { WisteriaProvider } from 'wisteria-ui';

export const Layout: FunctionalComponent = ({ children }) => {
  return <WisteriaProvider>{children}</WisteriaProvider>;
};
