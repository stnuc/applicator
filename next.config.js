const path = require('path');
const debug = process.env.NODE_ENV !== "production";
const repository = "applicator";

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
    assetPrefix: !debug ? `/${repository}/` : "",
    output: "export",
    images: {
      loader: 'custom',
      loaderFile: './loader.ts',
    },
};

module.exports = nextConfig;
