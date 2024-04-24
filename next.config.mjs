/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ghibli.jp",
        port: "",
        pathname: "/gallery/**",
      },
    ],
  },
};

export default nextConfig;
