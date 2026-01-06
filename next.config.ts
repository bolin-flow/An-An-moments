import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      }
    ]
  },
  reactCompiler: true,
  /* turn on turbopack file system cache for development */
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
