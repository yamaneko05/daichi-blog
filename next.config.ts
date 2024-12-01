import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        port: "",
        pathname: "/assets/f796dd2718b74fafa5d6ed13a47f77da/**",
      },
    ],
  },
};

export default nextConfig;
