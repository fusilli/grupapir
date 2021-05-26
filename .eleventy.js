const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("markdownify", require("./utils/markdownify.js") );
  eleventyConfig.addFilter("sierotki", require("./utils/sierotki.js") );
  eleventyConfig.addFilter("obfuscate", require("./utils/obfuscate.js") );

  eleventyConfig.addPassthroughCopy("./favicon.svg");
  eleventyConfig.addPassthroughCopy("./img/*");
  eleventyConfig.addPassthroughCopy("./fonts/*");
  eleventyConfig.addPassthroughCopy("./.htaccess");

  if (process.env.NODE_ENV == "production") {
    eleventyConfig.addTransform("htmlmin", require("./utils/minify-html.js") );
  }
  
  return  {
    passthroughFileCopy: true,
    templateFormats : ["njk", "md", "css"],
    markdownTemplateEngine : "njk"
  };

};
