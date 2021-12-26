module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css',
  });
  // Return your Object options:
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
