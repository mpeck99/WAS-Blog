
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });
  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.addPassthroughCopy("./src/css");
    return {
      dir: {
        input: "src",
        output: "public",
        templateFormats: ['md', '11ty.js']
      },
     
    };
};
  