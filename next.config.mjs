const nextConfig = {
  output: 'standalone',
  experimental: {
    optimizePackageImports: [], // optional, unrelated
  },
  images: { unoptimized: true },
  // 👇 disables automatic font optimization/download
  experimental: {
    fontOptimize: false,
  },
};

export default nextConfig;
