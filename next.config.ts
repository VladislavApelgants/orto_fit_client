import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
