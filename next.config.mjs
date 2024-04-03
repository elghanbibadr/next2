/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.website-files.com',
            port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'niybaycgkllaekcjjkfc.supabase.co',
            port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            // pathname: '/account123/**',
          },
        ],
      },
};

export default nextConfig;
