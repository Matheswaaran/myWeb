import React from 'react';
import '../css/NavigationBar.css';
import { FaFacebookF, FaBars, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdClose } from "react-icons/md";

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
                    <a href="#home">MATHESWAARAN</a>
                    <a href='#' className="icon" onClick={this.onIconCLickHandler}>
                        {this.state.responsive ? (<MdClose size={30} color="#FFF"/>) : (<FaBars size={30} color="#FFF"/>)}
                    </a>
                </div>
                <header className={this.state.responsive ? "header-container responsive" : "header-container"}>
                    <nav id="menu" className="navbar navbar-default">
                        <div className="navbar-header"></div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul id="navbar" className="nav navbar-nav">
                                <li className="active"><a href="#home" className="page-scroll">Home</a></li>
                                <li><a href="#about" className="page-scroll">About</a></li>
                                <li><a href="#education" className="page-scroll">Education</a></li>
                                <li><a href="#skill" className="page-scroll">Skill</a></li>
                                <li><a href="#my_projects" className="page-scroll">My Projects</a></li>
                                <li><a href="#portfolio" className="page-scroll">Portfolio</a></li>
                                <li><a href="#contact" className="page-scroll">contact</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="menu-footer">
                        <div className="social">
                            <ul>
                                <li><a href="https://www.facebook.com/matheswaaran" target="_blank" rel="noopener noreferrer"><FaFacebookF className="icon" size={14}/></a></li>
                                <li><a href="https://twitter.com/Matheswaaran_S" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" size={14}/></a></li>
                                <li><a href="https://plus.google.com/u/0/+Matheswaaran" target="_blank" rel="noopener noreferrer"><FaGoogle className="icon" size={14}/></a></li>
                                <li><a href="https://www.linkedin.com/in/matheswaaran" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="icon" size={14}/></a></li>
                                <li><a href="https://www.instagram.com/matheswaaran/" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" size={14}/></a></li>
                                <li><a href="https://www.github.com/Matheswaaran" target="_blank" rel="noopener noreferrer"><FaGithub className="icon" size={14}/></a></li>
                            </ul>
                        </div>
                        <div className="copyright">
                            <p>&copy; Matheswaaran <br/>all right reserved</p>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavigationBar;