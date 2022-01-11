const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (config) => {
	config.addPassthroughCopy("./src/assets/");
	config.addPlugin(syntaxHighlight);
}