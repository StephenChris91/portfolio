const withImages = require("next-images");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  webpack: (config, { dev }) => {
    // Enable CSS Modules only in development
    if (dev) {
      config.module.rules.push({
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      });
    }

    return config;
  },
};

module.exports = withImages({
  webpack(config, { isServer }) {
    if (!isServer) {
      // Enable webpack 5 asset module to load image files
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/_next/static/images",
              outputPath: "static/images",
            },
          },
        ],
      });
    }

    return config;
  },
});
