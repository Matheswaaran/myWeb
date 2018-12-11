import React from 'react';
import '../css/NavigationBar.css';
import { FaFacebookF, FaBars, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdClose } from "react-icons/md";
import NavigationItem from './NavigationItem';

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { responsive: false };
    }

    onIconCLickHandler = () => {
        this.setState({ responsive: !this.state.responsive });
    };

    render() {
        return (
            <div>
                <div className="menu-responsive">
                    <a href="#home">{this.props.name}</a>
                    <a href='#' className="icon" onClick={this.onIconCLickHandler}>
                        {this.state.responsive ? (<MdClose size={30} color="#FFF"/>) : (<FaBars size={30} color="#FFF"/>)}
                    </a>
                </div>
                <header className={this.state.responsive ? "header-container responsive" : "header-container"}>
                    <nav id="menu" className="navbar-container navbar-default">
                        <div className="navbar-header"></div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul id="navbar" className="nav navbar-nav">
                                <NavigationItem section="home" name="Home"/>
                                <NavigationItem section="about" name="about"/>
                                <NavigationItem section="resume" name="Resume"/>
                                <NavigationItem section="skills" name="Skills"/>
                                <NavigationItem section="my_projects" name="My Projects"/>
                                <NavigationItem section="portfolio" name="Portfolio"/>
                                <NavigationItem section="contact" name="Contact"/>
                            </ul>
                        </div>
                    </nav>
                    <div className="menu-footer">
                        <div className="social">
                            <ul>
                                <li><a href={this.props.socialLinks.fb} target="_blank" rel="noopener noreferrer"><FaFacebookF size={14}/></a></li>
                                <li><a href={this.props.socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter size={14}/></a></li>
                                <li><a href={this.props.socialLinks.g_plus} target="_blank" rel="noopener noreferrer"><FaGoogle size={14}/></a></li>
                                <li><a href={this.props.socialLinks.linkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={14}/></a></li>
                                <li><a href={this.props.socialLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram size={14}/></a></li>
                                <li><a href={this.props.socialLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub size={14}/></a></li>
                            </ul>
                        </div>
                        <div className="copyright">
                            <p>&copy; {this.props.name} <br/>all right reserved</p>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavigationBar;