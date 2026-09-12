module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/**/*.{png,jpg,jpeg,webp}");
  eleventyConfig.ignores.add("content/Templates/**");
  eleventyConfig.addPassthroughCopy("content/style.css");

  return {
    dir: {
      input: "content",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};