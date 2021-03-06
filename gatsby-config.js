module.exports = {
  siteMetadata: {
    title: 'All About Matheswaaran',
    siteUrl: 'https://matheswaaran.com',
    author: 'Matheswaaran',
    description: 'A small webpage about myself and my works - Matheswaaran',
    keywords: 'matheswaaran,Resume,cv,website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/Data`,
        name: 'json-data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: 'markdown-data',
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: true,
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1080,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    'gatsby-remark-copy-linked-files',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
