/** @type {import('next').NextConfig} */
const repo = 'three-screens';

const nextConfig = {
  output: 'export',
  // basePath is set automatically when running in GitHub Actions
  basePath: process.env.GITHUB_ACTIONS ? `/${repo}` : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
