/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/rajeshwari179.github.io/' : '',
  trailingSlash: true,
};

export default nextConfig;
