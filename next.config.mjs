/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/practice/javascript/mcq",
        permanent: true,
      },
      {
        source: "/practice/javascript",
        destination: "/practice/javascript/mcq",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
