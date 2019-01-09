import React from 'react';
import './Contact.css';

const Contact = (props) => {
  return (
    <section id="contact" className="google-map white-bg page-section-pt">
      <div className="container-fluid">
        <div id="google-map">
          <div id="map-canvas"></div>
        </div>
        <div className="contact">
          <h2>Say Hi It’s Free! </h2>
          <div className="address">
            <ul>
              <li><span className="ti-location-pin"></span> <p>Simmakkal, Madurai</p></li>
              <li><span className="ti-marker-alt"></span> <p>matheswaarans@gmail.com</p></li>
              <li><span className="ti-mobile"></span> <p>(+91)9025923103</p></li>
            </ul>
          </div>
          <div className="social">
            <h4>I'm also on Social Networks</h4>
            <p>Follow me on social networks to get the latest news, blog, updates and much more.</p>
            <ul>
              <li><a href="https://www.facebook.com/matheswaaran" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li><a href="https://twitter.com/Matheswaaran_S" target="_blank"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://plus.google.com/+Matheswaaran" target="_blank"><i className="fa fa-google-plus"></i> </a></li>
              <li><a href="https://www.linkedin.com/in/matheswaaran" target="_blank"><i className="fa fa-linkedin"></i> </a></li>
              <li><a href="https://www.instagram.com/matheswaaran/" target="_blank"><i className="fa fa-instagram"></i> </a></li>
              <li><a href="https://www.github.com/Matheswaaran" target="_blank"><i className="fa fa-github"></i> </a>
              </li>
            </ul>
          </div>
          <div className="button-large">
            <a href="https://tinyurl.com/matsresume" target="_blank">Download my Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;