import React from 'react';
import '../css/AboutMe.css';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

class AboutMe extends React.Component {

    render() {
        return (
            <section id="about" className="about white-bg page-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="about-image">
                                <img className="img-responsive" src={require("../images/me.jpg")} alt=""/>
                            </div>
                            <div className="about-social">
                                <ul>
                                    <li><a href="https://www.facebook.com/matheswaaran" target="_blank" rel="noopener noreferrer"><FaFacebookF size={14}/></a></li>
                                    <li><a href="https://twitter.com/Matheswaaran_S" target="_blank" rel="noopener noreferrer"><FaTwitter size={14}/></a></li>
                                    <li><a href="https://plus.google.com/+Matheswaaran" target="_blank" rel="noopener noreferrer"><FaGoogle size={14}/></a></li>
                                    <li><a href="https://www.linkedin.com/in/matheswaaran" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={14}/></a></li>
                                    <li><a href="https://www.instagram.com/matheswaaran/" target="_blank" rel="noopener noreferrer"><FaInstagram size={14}/></a></li>
                                    <li><a href="https://www.github.com/Matheswaaran" target="_blank" rel="noopener noreferrer"><FaGithub size={14}/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <div className="section-title">
                                <div className="section-title-name">
                                    <span>Know about me</span>
                                    <h2>About Me</h2>
                                </div>
                                <div className="title-name-gray">
                                    <strong>About me</strong>
                                </div>
                            </div>
                            <div className="contact-block">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="my-contact clearfix">
                                            <div className="contact-icon">
                                                <span className="ti-user"/>
                                            </div>
                                            <div className="contact-info">
                                                <h4>Name:</h4>
                                                <p>Matheswaaran</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="my-contact clearfix">
                                            <div className="contact-icon">
                                                <span className="ti-email"/>
                                            </div>
                                            <div className="contact-info">
                                                <h4>Email:</h4>
                                                <p>matheswaarans@
                                                    gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="my-contact clearfix">
                                            <div className="contact-icon">
                                                <span className="ti-mobile"/>
                                            </div>
                                            <div className="contact-info">
                                                <h4>Phone:</h4>
                                                <p>(+91)9025923103</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="my-contact clearfix">
                                            <div className="contact-icon">
                                                <span className="ti-calendar"/>
                                            </div>
                                            <div className="contact-info">
                                                <h4>Date of birth: </h4>
                                                <p>11 September 1996</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="my-contact clearfix">
                                            <div className="contact-icon">
                                                <span className="ti-direction-alt"/>
                                            </div>
                                            <div className="contact-info">
                                                <h4>Address: </h4>
                                                <p>Simmakkal, Madurai</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="my-contact clearfix">
                                            <div className="contact-icon">
                                                <span className="ti-flag-alt-2"/>
                                            </div>
                                            <div className="contact-info">
                                                <h4>Nationality: </h4>
                                                <p>Indian</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="about-block clearfix">
                                            <p>I am Madurai based <b>Linux System enthusiast</b>, <b>a web developer</b>,
                                                quick learner of new technologies and a dedicated scripter and
                                                programmer. A fresher with hands-on on various programming languages and
                                                concepts. </p>
                                            <p>I am currently working as <b>Frontend Developer</b> at <b>NFN Labs</b>,
                                                Chennai on ReactJS, Javascript and cross platform app development using
                                                Facebook's React Native.</p>
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