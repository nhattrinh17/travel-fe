/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:9999/api",
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
