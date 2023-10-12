const nextra = require('nextra');
const withPrefresh = require('@prefresh/next');

const GIT_REPO_NAME = 'wisteria-ui';

const isProd = process.env.NODE_ENV === 'production';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './config/index.tsx',
  defaultShowCopyCode: true
});

/**
 * @type {import('next').NextConfig}
 * @see https://nextjs.org/docs/app/api-reference/next-config-js
 **/
const nextConfig = {
  distDir: 'dist',
  output: 'export',
  basePath: (isProd && `/${GIT_REPO_NAME}`) || undefined,
  assetPrefix: (isProd && `/${GIT_REPO_NAME}/`) || undefined,
  cleanDistDir: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    esmExternals: false
  },
  transpilePackages: ['wisteria-ui'],
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      '@/*': './*'
    };
    return config;
  }
};
module.exports = withPrefresh(withNextra(nextConfig));
