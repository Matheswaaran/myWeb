import React from 'react';
import './AboutMe.css';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub, FaRegUser, FaMobileAlt } from 'react-icons/fa';
import {GoMail} from "react-icons/go";
import {FiCalendar, FiFlag} from "react-icons/fi";
import {TiDirections} from "react-icons/ti";
import SectionTitle from '../SectionTitle';

class AboutMe extends React.Component {

  render() {
    return (
      <section id="about" className="about white-bg page-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="about-image">
                <img className="img-responsive" src={require("../../images/me.jpg")} alt="" style={{ width: '100%' }}/>
              </div>
              <div className="about-social">
                <ul>
                  <li><a href={this.props.socialLinks.fb} target="_blank" rel="noopener noreferrer"><FaFacebookF size={14}/></a></li>
                  <li><a href={this.props.socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter size={14}/></a></li>
                  <li><a href={this.props.socialLinks.g_plus} target="_blank" rel="noopener noreferrer"><FaGoogle size={14}/></a></li>
                  <li><a href={this.props.socialLinks.linkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={14}/></a></li>
                  <li><a href={this.props.socialLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram size={14}/></a></li>
                  <li><a href={this.props.socialLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub size={14}/></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
              <SectionTitle span={12} title="About Me" description="Know about me"/>
              <div className="contact-block">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="my-contact clearfix">
                      <div className="contact-icon"><FaRegUser size={30}/></div>
                      <div className="contact-info">
                        <h4>Name:</h4>
                        <p>{this.props.data.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="my-contact clearfix">
                      <div className="contact-icon"><GoMail size={30}/></div>
                      <div className="contact-info">
                        <h4>Email:</h4>
                        <p>{this.props.data.emailId}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="my-contact clearfix">
                      <div className="contact-icon"><FaMobileAlt size={30}/></div>
                      <div className="contact-info">
                        <h4>Phone:</h4>
                        <p>{this.props.data.contactNo}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="my-contact clearfix">
                      <div className="contact-icon"><FiCalendar size={30}/></div>
                      <div className="contact-info">
                        <h4>Date of birth: </h4>
                        <p>{this.props.aboutMe.dataOfBirth}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="my-contact clearfix">
                      <div className="contact-icon"><TiDirections size={30}/></div>
                      <div className="contact-info">
                        <h4>Address: </h4>
                        <p>{this.props.data.Address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="my-contact clearfix">
                      <div className="contact-icon"><FiFlag size={30}/></div>
                      <div className="contact-info">
                        <h4>Nationality: </h4>
                        <p>{this.props.aboutMe.Nationality}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="about-block clearfix">
                      {this.props.aboutMe.introData.map((x, index) => (
                          <p key={index}>{x}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;