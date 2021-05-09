const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("markdownify", require("./utils/markdownify.js") );

  eleventyConfig.addPassthroughCopy("./favicon.svg");
  eleventyConfig.addPassthroughCopy("./img/*");
  
  return  {
    passthroughFileCopy: true,
    templateFormats : ["njk", "md", "css"],
    markdownTemplateEngine : "njk"
  };

};
