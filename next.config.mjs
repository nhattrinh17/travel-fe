/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // API_URL: "http://localhost:9999/api",
    // Product
    API_URL: "https://be.thglobaltravel.com/api",
    URL_MAIN: "https://thglobaltravel.com/",
  },
  images: {
    remotePatterns: [
      //
      { hostname: "storage.googleapis.com" },
    ],
    unoptimized: true,
  },
  output: "standalone",
};

export default nextConfig;
