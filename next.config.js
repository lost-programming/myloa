/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;


// module.exports =  {
//   reactStrictMode: false,
//   swcMinify: true,
//   // async rewrites() {
//   //   return [
//   //     {
//   //       source: '/Profile/:path*',
//   //       destination: "https://lostark.game.onstove.com/Profile/:path*",
//   //     },
//   //     // {
//   //     //   source: '/info/:path*',
//   //     //   destination: 'https://loawa.com/apis/char/info/:path*',
//   //     // }
//   //   ];
//   // }
// }
