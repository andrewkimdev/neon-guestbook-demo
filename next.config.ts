import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "refactored-xylophone-r57gwvxqqwfpwp7-3000.app.github.dev",
  ],
  experimental: {
    serverActions: {
      allowedOrigins: [
        "refactored-xylophone-r57gwvxqqwfpwp7-3000.app.github.dev",
        "localhost:3000",
      ],
    },
  },
};

export default nextConfig;
