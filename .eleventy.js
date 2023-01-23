const nunjucksDateFilter = require('nunjucks-date-filter');
const path = require('path')

const markdownItCore = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
let markdownIt = markdownItCore({html: true}).use(markdownItAttrs);


module.exports = function(eleventyConfig) {

    // add markdown (only) filter for article excerpts
    eleventyConfig.addFilter("md", function (content = "") {
        return markdownItCore({html: true}).use(markdownItAttrs).render(content);
    });

    eleventyConfig.setLibrary("md", markdownIt);

    // nunjucks date filter
    eleventyConfig.addNunjucksFilter('njkDate', nunjucksDateFilter);

    // pass through directories whose content cannot or need not be processed
    eleventyConfig.addPassthroughCopy('src/assets');


      // 11ty defaults
    return {

        markdownTemplateEngine: "njk",

        dir: {
            input: 'src',
            layouts: '_templates'
        }

    };
};
