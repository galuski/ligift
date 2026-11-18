/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig; 
// אם הקובץ שלך מסתיים ב-.js ולא ב-.mjs, השתמש בשורה הבאה במקום:
// module.exports = nextConfig;