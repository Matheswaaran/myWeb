import React from 'react';
import blog from "../images/blog/01.jpg";
import {FaRegFolder, FaRegUser} from "react-icons/fa";
import {Link} from "gatsby";

const BlogPostSingle = ({ frontmatter, excerpt, key }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6" key={key}>
      <div className="blog-block">
        <div className="blog-image">
          <img className="img-responsive" src={blog} alt=""/>
          <div className="blog-date">
            <span>{frontmatter.date}</span>
          </div>
        </div>
        <div className="blog-info">
          <div className="blog-meta">
            <p><span><FaRegUser size={14}/></span><a href="#">{frontmatter.author}</a></p>
            <p><span><FaRegFolder size={14}/></span><a href="#">{frontmatter.category}</a></p>
          </div>
          <div className="blog-content">
            <Link to={frontmatter.path}><a>{frontmatter.title}</a></Link>
            <small>{frontmatter.sub_title}</small>
            <p>{excerpt}</p>
            <div className="blog-bottom clearfix">
              <Link to={frontmatter.path}>
                <div className="button-small">
                  <a href="">Read More..</a>
                </div>
              </Link>
              {/*<div className="social pull-right">*/}
              {/*<ul>*/}
              {/*<li><a href="#"><i className="fa fa-facebook"></i> </a></li>*/}
              {/*<li><a href="#"><i className="fa fa-twitter"></i></a></li>*/}
              {/*<li><a href="#"><i className="fa fa-linkedin"></i> </a></li>*/}
              {/*</ul>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostSingle;