module.exports = {
  // REQUIRED: add your own domain name here (e.g. https://ipoexpert.io),
  siteUrl: process.env.SITE_URL || "https://example.in",
  generateRobotsTxt: false,
  // use this to exclude routes from the sitemap (i.e. a user dashboard). By default, NextJS app router metadata files are excluded (https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],
};
