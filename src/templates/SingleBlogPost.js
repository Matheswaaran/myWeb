import React from 'react';
import { graphql } from 'gatsby';
import '../css/SingleBlogPost.css';
import {ScrollingProvider, Section} from "react-scroll-section";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";

const SingleBlogPost = ({ data }) => {
  console.log(data);
  const post = data.markdownRemark;
  return (
    <ScrollingProvider scrollBehavior="smooth">
      <Layout pageTitle={post.frontmatter.title} singleBlogPage>
        <Breadcrumb
          title={post.frontmatter.title}
          subTitle={post.frontmatter.sub_title}
          data={`home/blog/`}
          singleBlogPage
          backgroundImage={post.frontmatter.thumb_image.childImageSharp.fixed.src}
        />
        <Section id="blog_post">
          <section className="blog blog-single white-bg">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-9 col-md-9">
                  <div className="content" dangerouslySetInnerHTML={{__html: post.html}}>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="slidebar">
                    <div className="slidebar-link">
                      <h3>Categories</h3>
                      <ul>
                        <li><a href="#">Architecture</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Creative</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Education</a></li>
                      </ul>
                    </div>
                    <div className="slidebar-post">
                      <h3>Popular Posts</h3>
                      <div className="post">
                        <a href="#">Hypnotherapy For Motivation Getting The Drive Back</a>
                        <span>Monday / jan 10, 2016 </span>
                      </div>
                      <div className="post">
                        <a href="#">When You Are Down And Out How Do You Get Up And Go Forward</a>
                        <span>Monday / Feb 10, 2016 </span>
                      </div>
                      <div className="post">
                        <a href="#">How I Lost The Secret Of Dazzling Success For 20 Years</a>
                        <span>Monday / Mar 10, 2016 </span>
                      </div>
                      <div className="post">
                        <a href="#">Hypnotherapy For Motivation Getting The Drive Back</a>
                        <span>Monday / Apr 10, 2016 </span>
                      </div>
                    </div>
                    <div className="slidebar-link">
                      <h3>Categories</h3>
                      <ul>
                        <li><a href="#">January 2016 </a></li>
                        <li><a href="#">February 2016 </a></li>
                        <li><a href="#">March 2016 </a></li>
                        <li><a href="#">April 2016 </a></li>
                        <li><a href="#">May 2016 </a></li>
                        <li><a href="#">June 2016 </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Section>
      </Layout>
    </ScrollingProvider>
  );
};

export const singleBlogQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter:{ path: { eq: $path } }){
      frontmatter{ 
        title 
        path 
        sub_title 
        date 
        author 
        category
        thumb_image {
          childImageSharp{
            fixed(width: 1008 height: 567) { src originalName }
          }
        } 
      }
      html
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
      introHeader {
        resumeUrl designation
      }
    }
    allMarkdownRemark {
      distinct(field: frontmatter___category)
    } 
  }
`;

export default SingleBlogPost;
