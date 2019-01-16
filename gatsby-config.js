module.exports = {
    siteMetadata: {
        title: `All About Matheswaaran`,
        siteUrl: `https://matheswaaran.com`,
        author: `Matheswaaran`,
        description: `A small webpage about myself and my works - Matheswaaran`,
        keywords: `matheswaaran,Resume,cv,website`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/Data`,
                name: 'json-data'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages/posts`,
                name: 'markdown-data'
            }
        },
        'gatsby-plugin-catch-links',
        'gatsby-transformer-remark',
        'gatsby-transformer-json',
    ],
};