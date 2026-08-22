import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.10"],
  images: {
    domains: ["media.licdn.com"],
  },

  reactCompiler: true,
};
const nextWithIntl =  createNextIntlPlugin();
export default nextWithIntl(nextConfig);
