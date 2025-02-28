/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // The following is needed if your repo isn't at username.github.io
  // but instead at username.github.io/your-repo-name
  basePath: process.env.NODE_ENV === 'production' ? '/toys-app' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
