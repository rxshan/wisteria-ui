import { navbarConfig } from './navbar';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  ...navbarConfig,
  primaryHue: {
    dark: 185,
    light: 200
  },
  useNextSeoProps: () => {
    return { titleTemplate: '%s - wisteria' };
  },
  docsRepositoryBase: 'https://github.com/rxshan/wisteria-ui/tree/main/docs',
  search: {
    placeholder: 'Search...'
  },
  editLink: {
    text: '编辑页面'
  },
  feedback: {
    content: '页面反馈'
  },
  toc: {
    title: '目录'
  }
};

export default config;
