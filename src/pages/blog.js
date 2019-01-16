import React from 'react';
import '../css/Blog.css';
import {graphql, Link} from "gatsby";
import { ScrollingProvider, Section } from "react-scroll-section";
import { FaAngleLeft, FaHome } from "react-icons/fa";
import Layout from "../components/Layout";
import BlogPostSingle from "../components/BlogPostSingle";
import Contact from "../components/Contact";

const Blog = ({ data }) => {
  return(
    <ScrollingProvider scrollBehavior="smooth">
      <Layout pageTitle="My Blog Posts" blogPage>
        <section className="content-scroller">
          <div className="page-header bg gradient-01">
            <div className="container-fluid">
              <div className="row">
                <div className="top-bar clearfix">
                  <Link to={'/'}>
                    <div className="back-home pull-left">
                      <a href="#"><span><FaAngleLeft size={15}/></span> back to home</a>
                    </div>
                  </Link>
                  <ul className="breadcrumb pull-right">
                    <li><Link to={'/'}><a href="#"><span><FaHome size={15}/></span> Home </a></Link></li>
                    <li className="active">/ Blog</li>
                  </ul>
                </div>
                <div className="page-header-title">
                  <h1>blog page</h1>
                  <span>Matheswaaran's Blog</span>
                </div>
              </div>
            </div>
          </div>
        </section>
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
    allMarkdownRemark{
      edges{
        node{
          frontmatter{ path title author sub_title date category }
          excerpt
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