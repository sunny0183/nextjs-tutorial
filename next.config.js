/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com","test.sample.com", "google.com"],
  },
  output:'standalone',
};

module.exports = nextConfig;
