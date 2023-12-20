/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['localhost', 'https://therapyback.airlystudio.com/'],
    // },

    // async rewrites() {
    //     return [
    //         {
    //             source: '/api/:path*',
    //             destination: 'https://api.example.com/:path*',
    //         },
    //     ];
    // },
    typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'https://therapyback.airlystudio.com/:path*',
            },
        ];
    },
};

module.exports = nextConfig;
