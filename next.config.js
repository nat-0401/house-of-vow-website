/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [360, 414, 480, 640, 750, 828, 1080, 1200, 1920],
    qualities: [50, 60, 62, 68, 70, 75, 85],
  },
};

module.exports = nextConfig;
