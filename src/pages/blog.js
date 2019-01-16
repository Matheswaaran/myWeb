import React from 'react';
import '../css/Blog.css';
import {graphql} from "gatsby";
import { ScrollingProvider, Section } from "react-scroll-section";
import Layout from "../components/Layout";
import BlogPostSingle from "../components/BlogPostSingle";
import Contact from "../components/Contact";
import Breadcrumb from "../components/Breadcrumb";

const Blog = ({ data }) => {
  return(
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
                {data.allMarkdownRemark.edges.map((node, index) => {
                  return(
                    <BlogPostSingle
                      key={index}
                      frontmatter={node.node.frontmatter}
                      excerpt={node.node.excerpt}
                      timeToRead={node.node.timeToRead}
                    />
                  );
                })}
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
};

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