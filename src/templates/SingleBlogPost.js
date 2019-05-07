import React from 'react';
import { graphql } from 'gatsby';
import '../css/SingleBlogPost.css';

const SingleBlogPost = ({ data }) => {
  console.log(data);
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
    </div>
  );
};

export const singleBlogQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter:{ path: { eq: $path } }){
      frontmatter{ title path sub_title date author category }
      html
    } 
  }
`;

export default SingleBlogPost;
