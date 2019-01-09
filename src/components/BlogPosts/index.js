import React from 'react';
import './Blog.css';
import SectionTitle from "../SectionTitle";

const Blog = (props) => {
  return (
    <section id="blog" className="blog white-bg page-section">
      <div className="container-fluid">
        <SectionTitle span={12} title="Blog Posts" description="My Latest Blog Posts"/>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="blog-block">
              <div className="blog-image">
                <img className="img-responsive" src="../../images/blog/01.jpg" alt=""/>
                  <div className="blog-date">
                    <span>June <br/>05</span>
                  </div>
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <p><span className="ti-comment-alt"></span> <a href="#">4</a></p>
                  <p><span className="ti-user"></span> <a href="#">Admin </a></p>
                  <p><span className="ti-folder"></span> <a href="#">Development</a></p>
                </div>
                <div className="blog-content">
                  <a href="blog-single.html">Are You Famous Or Focused</a>
                  <p>Commodo consequat ut enim ad minim niam, quis nostrud ullamco nisi ut aliquip exea non veritatis illum laudantium</p>
                  <div className="blog-bottom clearfix">
                    <div className="button-small">
                      <a href="#">Read More..</a>
                    </div>
                    <div className="social pull-right">
                      <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i> </a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i> </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="blog-block">
              <div className="blog-image">
                <img className="img-responsive" src="images/blog/02.jpg" alt=""/>
                  <div className="blog-date">
                    <span>Aug <br/>15</span>
                  </div>
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <p><span className="ti-comment-alt"></span> <a href="#">0</a></p>
                  <p><span className="ti-user"></span> <a href="#">Admin </a></p>
                  <p><span className="ti-folder"></span> <a href="#">Web Design</a></p>
                </div>
                <div className="blog-content">
                  <a href="blog-single.html">Does Your Life Lack Meaning</a>
                  <p>Exercitation ullamco laboris nisi ut aliquip exea commodo consequat ut enim ad minim niam quis
                    minim nostrud. </p>
                  <div className="blog-bottom clearfix">
                    <div className="button-small">
                      <a href="#">Read More..</a>
                    </div>
                    <div className="social pull-right">
                      <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i> </a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i> </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="blog-block">
              <div className="blog-image">
                <img className="img-responsive" src="images/blog/03.jpg" alt=""/>
                  <div className="blog-date">
                    <span>Sep <br/>11</span>
                  </div>
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <p><span className="ti-comment-alt"></span> <a href="#">7</a></p>
                  <p><span className="ti-user"></span> <a href="#">Admin </a></p>
                  <p><span className="ti-folder"></span> <a href="#">WordPress</a></p>
                </div>
                <div className="blog-content">
                  <a href="blog-single.html">Harness The Power Of Your Dreams</a>
                  <p>Auis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat at enim ad minim niam. </p>
                  <div className="blog-bottom clearfix">
                    <div className="button-small">
                      <a href="#">Read More..</a>
                    </div>
                    <div className="social pull-right">
                      <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i> </a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i> </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="blog-block">
              <div className="blog-image">
                <img className="img-responsive" src="images/blog/04.jpg" alt=""/>
                  <div className="blog-date">
                    <span>Dec <br/>22</span>
                  </div>
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <p><span className="ti-comment-alt"></span> <a href="#">10</a></p>
                  <p><span className="ti-user"></span> <a href="#">Admin </a></p>
                  <p><span className="ti-folder"></span> <a href="#">Magento</a></p>
                </div>
                <div className="blog-content">
                  <a href="blog-single.html">Does Your Life Lack Meaning</a>
                  <p>Mostrud exercitation ullamco laboris nisi ut aliquip exea ut enim ad minim niam quis and commodo
                    consequat. </p>
                  <div className="blog-bottom clearfix">
                    <div className="button-small">
                      <a href="#">Read More..</a>
                    </div>
                    <div className="social pull-right">
                      <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i> </a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i> </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;