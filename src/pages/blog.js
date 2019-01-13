import React from 'react';
import '../css/Blog.css';
import {graphql, Link} from "gatsby";
import { FaAngleLeft, FaHome } from "react-icons/fa";
import Layout from "../components/Layout";
import BlogPostSingle from "../components/BlogPostSingle";

const Blog = ({ data }) => {
  return(
      <Layout pageTitle="My Blog Posts" errorPage>
        <section className="content-scroller">
          <div className="page-header bg gradient-01">
            <div className="container-fluid">
              <div className="row">
                <div className="top-bar clearfix">
                  <Link to={'/'}>
                    <div className="back-home pull-left">
                      <a href="index.html"><span><FaAngleLeft size={15}/></span> back to home</a>
                    </div>
                  </Link>
                  <ul className="breadcrumb pull-right">
                    <li><Link to={'/'}><a href="index.html"><span><FaHome size={15}/></span> Home </a></Link></li>
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
      </Layout>
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
  }
`;

export default Blog;