/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "tailwindui.com",
      "img.clerk.com"
    ],
  }
}

module.exports = nextConfig
