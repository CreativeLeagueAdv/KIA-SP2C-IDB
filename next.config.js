const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: "export",
};

module.exports = {
  ...nextConfig,
  i18n,
};
