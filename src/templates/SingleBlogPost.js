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
  }
`;

export default SingleBlogPost;
