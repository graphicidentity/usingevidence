module.exports = function(eleventyConfig) {
  // Copy CSS files as-is
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Copy images
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copy PDF files
  eleventyConfig.addPassthroughCopy("pdf_downloads");
  
  // Copy robots.txt
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};