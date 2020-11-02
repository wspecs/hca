module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets");
	return {
		passtroughFileCopy: true,
		markdownTemplateEngine: "njk",
		templateFormats: ["html", "njk", "md"],
		dir: {
			input: "src",
			output: "_site",
			includes: "includes"
		}
	};
};