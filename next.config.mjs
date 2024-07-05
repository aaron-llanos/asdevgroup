/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
};

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/',
//         destination: '/',
//       },
//       {
//         source: '/contact',
//         destination: '/contact',
//       },
//       {
//         source: '/inside/mx/:path*',
//         destination: '/inside/mx/:path*',
//       },
//       {
//         source: '/inside/us/:path*',
//         destination: '/inside/us/:path*',
//       },
//       {
//         source: '/investors',
//         destination: '/investors',
//       },
//       {
//         source: '/new',
//         destination: '/new',
//       },
//       {
//         source: '/news',
//         destination: '/news',
//       },
//       {
//         source: '/our-history',
//         destination: '/our-history',
//       },
//       {
//         source: '/portfolio',
//         destination: '/portfolio',
//       },
//       {
//         source: '/team',
//         destination: '/team',
//       },
//     ]
//   },
// }

export default nextConfig;
