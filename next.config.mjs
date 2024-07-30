/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // API_URL: "http://localhost:9999/api",
    // Product
    API_URL: "https://be.trinhminhnhat.info.vn/api",
  },
  images: {
    remotePatterns: [
      //
      { hostname: "storage.googleapis.com" },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
