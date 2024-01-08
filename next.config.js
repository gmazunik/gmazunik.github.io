/** @type {import('next').NextConfig} */

// const DEPLOYED_TO_GITHUB_PAGES = process.env.NODE_ENV === 'production';

// const repoName = 'gmazunik.github.io';

// const basePath = DEPLOYED_TO_GITHUB_PAGES ? `/${repoName}` : '';
// const assetPrefix = DEPLOYED_TO_GITHUB_PAGES ? `/${repoName}/` : '';

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    // basePath,
    // assetPrefix,
}

module.exports = nextConfig
