import React from 'react';
import './BlogPosts.css';
import SectionTitle from "../SectionTitle";
import BlogPostSingle from '../BlogPostSingle';

const BlogPosts = ({ blogData, imageData }) => {
  return (
    <section id="blog" className="blog white-bg page-section">
      <div className="container-fluid">
        <SectionTitle span={12} title="Blog Posts" description="My Latest Blog Posts"/>
        <div className="row">
          {blogData.edges.map((node, index) => {
            return (
              <BlogPostSingle
                key={index}
                frontmatter={node.node.frontmatter}
                excerpt={node.node.excerpt}
                timeToRead={node.node.timeToRead}
                image={imageData[index].node.fixed.src}
              />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;