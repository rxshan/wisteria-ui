import type { DocsThemeConfig } from 'nextra-theme-docs';

const bannerConfig: DocsThemeConfig['banner'] = {
  key: 'alpha-0.0.0',
  text: (
    <a target="_blank" rel="noreferrer">
      👏 欢迎来到 Wisteria UI 🎉
    </a>
  ) as any
};

const projectConfig: DocsThemeConfig['project'] = {
  link: 'https://github.com/rxshan/wisteria-ui'
};

export const navbarConfig: DocsThemeConfig = {
  logo: (<strong>Wisteria UI</strong>) as any,
  banner: bannerConfig,
  project: projectConfig
};
