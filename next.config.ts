import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  /* turn on turbopack file system cache for development */
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
