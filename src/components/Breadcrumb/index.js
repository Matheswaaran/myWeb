import React from 'react';
import './Breadcrumb.css';
import { Link } from 'gatsby';
import { FaAngleLeft, FaHome, FaFolder, FaUser } from 'react-icons/fa';

const Breadcrumb = props => (
  <section className="content-scroller" style={props.singleBlogPage ? { margin: 0 } : {}}>
    <div className="page-header bg gradient-01" style={props.backgroundImage ? {background: `url(${props.backgroundImage})`} : {}}>
      <div className="container-fluid">
        <div className="row">
          <div className="top-bar clearfix">
            <div className="back-home pull-left">
              <Link to="/">
                <span><FaAngleLeft size={15} /></span>
                back to home
              </Link>
            </div>
            <ul className="breadcrumb pull-right">
              <li>
                <Link to="/">
                  <span><FaHome size={15} /></span>
                  Home
                </Link>
              </li>
              <li className="active">/ Blog</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="page-header-title">
            <h1>{props.title}</h1>
            <span>{props.subTitle}</span>
            <div className="metadata">
              {props.author && (<span className="author"><FaUser size={15} />{props.author}</span>)}
              {props.category && (<span className="category"><FaFolder size={15} />{props.category}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Breadcrumb;
