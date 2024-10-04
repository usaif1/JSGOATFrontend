/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/practice/javascript",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
