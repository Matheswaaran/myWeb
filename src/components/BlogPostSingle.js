import React from 'react';
// import blog from "../images/blog/01.jpg";
import { FaRegFolder, FaRegUser } from 'react-icons/fa';
import { Link } from 'gatsby';
import './BlogPosts/BlogPosts.css';

const BlogPostSingle = ({frontmatter, excerpt, key, timeToRead}) => (
  <div className="col-lg-4 col-md-6 col-sm-6" key={key}>
    <div className="blog-block">
      <div className="blog-image">
        <img className="img-responsive" src={frontmatter.thumb_image.childImageSharp.fixed.src} alt={frontmatter.thumb_image.childImageSharp.fixed.originalName} />
        <div className="blog-date">
          <span>{frontmatter.date}</span>
        </div>
      </div>
      <div className="blog-info">
        <div className="blog-meta">
          <p>
            <span><FaRegUser size={14} /></span>
            <Link to="/">{frontmatter.author}</Link>
          </p>
          <p>
            <span><FaRegFolder size={14} /></span>
            <Link to="/">{frontmatter.category}</Link>
          </p>
        </div>
        <div className="blog-content">
          <Link to={frontmatter.path}>{frontmatter.title}</Link>
          <small>{frontmatter.sub_title}</small>
          <p>{excerpt}</p>
          <div className="blog-bottom clearfix">
            <div className="button-small">
              <Link to={frontmatter.path}>Read More..</Link>
            </div>
            <div className="social">
              <ul>
                <li>
                  {timeToRead}{' '}mins Read
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogPostSingle;
