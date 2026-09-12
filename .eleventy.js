module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/**/*.{png,jpg,jpeg,webp}");
  eleventyConfig.ignores.add("content/Templates/**");
  eleventyConfig.addPassthroughCopy("content/style.css");
  eleventyConfig.addCollection("tueurs", (api) => api.getFilteredByGlob("content/Tueurs/*.md"));
  eleventyConfig.addCollection("mafieux", (api) => api.getFilteredByGlob("content/Mafieux/*.md"));
  eleventyConfig.addCollection("escrocs", (api) => api.getFilteredByGlob("content/Escrocs/*.md"));

  return {
    dir: {
      input: "content",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};