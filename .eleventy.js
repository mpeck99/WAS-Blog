
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });
  eleventyConfig.addWatchTarget('./src/assets/sass/**');
  eleventyConfig.addPassthroughCopy("./src/assets/css");
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addPassthroughCopy('./src/assets/js/');
    return {
      dir: {
        input: "src",
        output: "public",
        templateFormats: ['md', '11ty.js', "njk"]
      },
    };
};
  