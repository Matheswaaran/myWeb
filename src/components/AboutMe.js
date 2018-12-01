import React from 'react';
import '../css/AboutMe.css';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub, FaRegUser, FaMobileAlt } from 'react-icons/fa';
import {GoMail} from "react-icons/go";
import {FiCalendar, FiFlag} from "react-icons/fi";
import {TiDirections} from "react-icons/ti";
import {graphql, StaticQuery} from "gatsby";

class AboutMe extends React.Component {

    render() {
        return (
            <StaticQuery
                query={graphql`query { dataJson{ name emailId contactNo dataOfBirth Address Nationality aboutMe{ introData } socialLinks { fb twitter g_plus linkedIn instagram github } } }`}
                render={(data) => (
                    <section id="about" className="about white-bg page-section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="about-image">
                                        <img className="img-responsive" src={require("../images/me.jpg")} alt="" style={{ width: '100%' }}/>
                                    </div>
                                    <div className="about-social">
                                        <ul>
                                            <li><a href={data.dataJson.socialLinks.fb} target="_blank" rel="noopener noreferrer"><FaFacebookF size={14}/></a></li>
                                            <li><a href={data.dataJson.socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter size={14}/></a></li>
                                            <li><a href={data.dataJson.socialLinks.g_plus} target="_blank" rel="noopener noreferrer"><FaGoogle size={14}/></a></li>
                                            <li><a href={data.dataJson.socialLinks.linkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={14}/></a></li>
                                            <li><a href={data.dataJson.socialLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram size={14}/></a></li>
                                            <li><a href={data.dataJson.socialLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub size={14}/></a></li>
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
                                                    <div className="contact-icon"><FaRegUser size={30}/></div>
                                                    <div className="contact-info">
                                                        <h4>Name:</h4>
                                                        <p>{data.dataJson.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <div className="my-contact clearfix">
                                                    <div className="contact-icon"><GoMail size={30}/></div>
                                                    <div className="contact-info">
                                                        <h4>Email:</h4>
                                                        <p>{data.dataJson.emailId}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <div className="my-contact clearfix">
                                                    <div className="contact-icon"><FaMobileAlt size={30}/></div>
                                                    <div className="contact-info">
                                                        <h4>Phone:</h4>
                                                        <p>{data.dataJson.contactNo}</p>
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
                                                        <p>{data.dataJson.dataOfBirth}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <div className="my-contact clearfix">
                                                    <div className="contact-icon"><TiDirections size={30}/></div>
                                                    <div className="contact-info">
                                                        <h4>Address: </h4>
                                                        <p>{data.dataJson.Address}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <div className="my-contact clearfix">
                                                    <div className="contact-icon"><FiFlag size={30}/></div>
                                                    <div className="contact-info">
                                                        <h4>Nationality: </h4>
                                                        <p>{data.dataJson.Nationality}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="about-block clearfix">
                                                    {data.dataJson.aboutMe.introData.map(x => (
                                                        <p>{x}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            />
        );
    }
}

export default AboutMe;