import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.10"],
  images: {
    domains: ["media.licdn.com"],
  },

  reactCompiler: true,
};

export default nextConfig;
