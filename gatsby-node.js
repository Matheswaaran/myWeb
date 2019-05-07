const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const blogTemplate = path.resolve('src/templates/SingleBlogPost.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges{
          node{
            frontmatter{ path title author sub_title date category }
            timeToRead
            html
            excerpt
            id
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogTemplate,
      });
    });
  });
};
