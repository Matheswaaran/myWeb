import React from 'react';
import './Breadcrumb.css';
import {Link} from "gatsby";
import {FaAngleLeft, FaHome} from "react-icons/fa";

const Breadcrumb = (props) => {
  return (
    <section className="content-scroller">
      <div className="page-header bg gradient-01">
        <div className="container-fluid">
          <div className="row">
            <div className="top-bar clearfix">
              <div className="back-home pull-left">
                <Link to={'/'}><span><FaAngleLeft size={15}/></span> back to home</Link>
              </div>
              <ul className="breadcrumb pull-right">
                <li><Link to={'/'}><span><FaHome size={15}/></span> Home </Link></li>
                <li className="active">/ Blog</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="page-header-title">
              <h1>{props.title}</h1>
              <span>{props.subTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;