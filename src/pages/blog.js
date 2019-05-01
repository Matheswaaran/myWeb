import React from 'react';
import '../css/Blog.css';
import { graphql } from 'gatsby';
import { ScrollingProvider, Section } from 'react-scroll-section';
import Layout from '../components/Layout';
import BlogPostSingle from '../components/BlogPostSingle';
import Contact from '../components/Contact';
import Breadcrumb from '../components/Breadcrumb';

const Blog = ({ data }) => (
  <ScrollingProvider scrollBehavior="smooth">
    <Layout pageTitle="My Blog Posts" blogPage>
      <Breadcrumb
        title="Blog Page"
        subTitle="Matheswaaran's Blog"
      />
      <Section id="recent_posts">
        <section className="blog blog-page white-bg page-section">
          <div className="container-fluid">
            <div className="row">
              {data.allMarkdownRemark.edges.map((node, index) => (
                <BlogPostSingle
                  key={`${index + 1}`}
                  frontmatter={node.node.frontmatter}
                  excerpt={node.node.excerpt}
                  timeToRead={node.node.timeToRead}
                  image={data.allImageSharp.edges[index].node.fixed.src}
                />
              ))}
            </div>
          </div>
        </section>
      </Section>
      <Section id="contact">
        <Contact
          socialLinks={data.dataJson.socialLinks}
          resumeUrl={data.dataJson.introHeader.resumeUrl}
          contact={data.dataJson.contact}
        />
      </Section>
    </Layout>
  </ScrollingProvider>
);

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark (sort: { order: ASC, fields: frontmatter___date }){
      edges{
        node{
          frontmatter{ path title author sub_title date category }
          excerpt
          timeToRead
          html
        }
      }
    }
    allImageSharp(sort: {order: ASC, fields: original___src} ) {
      edges {
        node {
          fixed(width: 363 height: 175) { src }
        }
      }
    }
    dataJson {
      socialLinks {
        fb twitter g_plus instagram linkedIn github
      }
      contact { 
        map_initial_coordinates { lat lng } 
        home_coordinates { lat lng }
        mapZoom
      }
      introHeader { resumeUrl }
    }
  }
`;

export default Blog;
