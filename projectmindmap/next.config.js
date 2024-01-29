/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [{ hostname: "upload.wikimedia.org" }],
    },
};

module.exports = nextConfig;

const withVideos = require("next-videos");

module.exports = withVideos();
