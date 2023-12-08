/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net'
            },
            {
                hostname: 'undefined'
            }
        ]
    }
}

module.exports = nextConfig
