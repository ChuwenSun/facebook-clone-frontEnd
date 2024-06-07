/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "platform-lookaside.fbsbx.com", "i0.wp.com"]
  }
};

export default nextConfig;
