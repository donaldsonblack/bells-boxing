const nextConfig = {
  output: 'standalone',
  images: { unoptimized: true },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [],
    fontLoaders: [],
  },
};
