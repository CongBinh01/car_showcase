/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.imagin.studio',
            pathname: '/**', // Cho phép tất cả các ảnh từ đường dẫn này
          },
        ],
      },
      reactStrictMode: true,
}

module.exports = nextConfig