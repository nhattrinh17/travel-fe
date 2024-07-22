/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // API_URL: "http://localhost:9999/api",
    // Product
    API_URL: "https://be.trinhminhnhat.info.vn/api",
  },
  images: {
    domains: [
      "www.insidetravel.com",
      "d1k2oi80tv211b.cloudfront.net",
      "storage.googleapis.com",
    ],
  },
};

export default nextConfig;
