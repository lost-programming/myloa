/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: '/Profile/:path',
        destination: "https://lostark.game.onstove.com/Profile/:path",
      },
    ];
  }

  return { rewrites }
}
