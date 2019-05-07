import React from 'react';
import './Contact.css';
import {
  FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub, FaRegEdit, FaMobileAlt,
} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Maps from './Maps';

const Contact = props => (
  <section id="contact" className="google-map white-bg page-section-pt">
    <div className="container-fluid">
      <div id="google-map">
        <div id="map-canvas">
          <Maps mapData={props.contact} />
        </div>
      </div>
      <div className="contact">
        <h2>Say Hi It’s Free!</h2>
        <div className="address">
          <ul>
            <li>
              <MdLocationOn size={20} />
              {' '}
              <span>Simmakkal, Madurai</span>
            </li>
            <li>
              <FaRegEdit size={20} />
              {' '}
              <span>matheswaarans@gmail.com</span>
            </li>
            <li>
              <FaMobileAlt size={20} />
              {' '}
              <span>(+91)9025923103</span>
            </li>
          </ul>
        </div>
        <div className="social">
          <h4>I'm also on Social Networks</h4>
          <p>Follow me on social networks to get the latest news, blog, updates and much more.</p>
          <ul>
            <li><a href={props.socialLinks.fb} target="_blank" rel="noopener noreferrer"><FaFacebookF size={16} /></a></li>
            <li><a href={props.socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter size={16} /></a></li>
            <li><a href={props.socialLinks.g_plus} target="_blank" rel="noopener noreferrer"><FaGoogle size={16} /></a></li>
            <li><a href={props.socialLinks.linkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={16} /></a></li>
            <li><a href={props.socialLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram size={16} /></a></li>
            <li><a href={props.socialLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub size={16} /></a></li>
          </ul>
        </div>
        <div className="button-large">
          <a href={props.resumeUrl} target="_blank" rel="noopener noreferrer">Download my Resume</a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
