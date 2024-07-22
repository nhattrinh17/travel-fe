/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:9999/api",
    // Product
    // API_URL: "https://be.trinhminhnhat.info.vn/api",
  },
  images: {
    // remotePatterns: [
    //   //
    //   { hostname: "storage.googleapis.com" },
    //   // { hostname: "d1k2oi80tv211b.cloudfront.net" },
    // ],
    domains: ["storage.googleapis.com"],
    unoptimized: true,
  },
};

export default nextConfig;
