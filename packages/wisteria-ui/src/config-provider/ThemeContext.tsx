import { createContext } from 'preact';
import { useMount } from '../hooks';

export const ThemeContext = createContext({});

export const useRootCSSVars = () => {
  useMount(() => {
    const root = document.documentElement;

    console.log(root.style.setProperty('--color-primary', 'hello world'));
  });
};
