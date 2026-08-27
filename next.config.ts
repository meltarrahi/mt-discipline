import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/over-mohamed",
        destination: "/over-mt-discipline",
        permanent: true,
      },
      {
        source: "/kennis",
        destination: "/artikelen",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
