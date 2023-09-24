const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { i18n } = require('./next-i18next.config');
const packageJSON = require('./package.json');

/**
 * Get ENV config
 */
const getEnvConfig = () => {
  let envFromCI = JSON.parse(process.env.ENV_VARS || '{}');
  return {
    BASE_PATH: envFromCI.BASE_PATH || '',
    NEXT_PUBLIC_APP_VERSION: envFromCI.NEXT_PUBLIC_APP_VERSION || packageJSON.version,
    NEXT_PUBLIC_API_GATEWAY_BASE_URL: envFromCI.NEXT_PUBLIC_API_GATEWAY_BASE_URL,
  };
};
// ENV config
const envConfig = getEnvConfig();

/**
 * Next.js config
 *
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n,
  reactStrictMode: true,
  basePath: envConfig.BASE_PATH || '',
  env: envConfig,
  pageExtensions: ['ts', 'tsx'],
  poweredByHeader: false,
  styledComponents: true,
  images: {
    domains: ['picsum.photos', 'images.unsplash.com', 'cryptoslate.com', 'i1-vnexpress.vnecdn.net', 'dl.airtable.com'],
  },
  async headers() {
    return [
      {
        source: '/images/(.*)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=71259, must-revalidate',
          },
        ],
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Swap sentry/node by sentry/browser
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    return config;
  },
};

/**
 * Compose Next.js plugins
 */
module.exports = withPlugins(
  [
    /** Bundle Analyzer plugin */
    [withBundleAnalyzer],
  ],
  nextConfig,
);
