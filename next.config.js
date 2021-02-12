module.exports = {
  target: "serverless",
  images: {
    deviceSizes: [40, 640, 750, 828, 1080, 1200, 1920, 2048],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
    });
    return config;
  },
};
