/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only compile the icons you import instead of whole react-icons sets (faster /services, /resume, etc.)
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
