import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  generateBuildId: () => {
    return process.env.GIT_SHA || '';
  }
};


export default nextConfig;
