module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./styles.css");

  // Blog collection (newest first)
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("./posts/*.md").sort((a, b) => b.date - a.date);
  });

  // Cross-engine date filter (Liquid & Nunjucks): YYYY-MM-DD
  function toISO(date) {
    if (!(date instanceof Date)) date = new Date(date);
    if (isNaN(date)) return String(date);
    return date.toISOString().slice(0, 10);
  }
  eleventyConfig.addNunjucksFilter("formatDateISO", toISO);
  eleventyConfig.addFilter("formatDateISO", toISO);

  return {
    dir: { input: ".", includes: "_includes", data: "_data", layouts: "_includes" },
    pathPrefix: process.env.PATH_PREFIX || "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
