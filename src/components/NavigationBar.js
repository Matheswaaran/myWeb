import React from 'react';
import '../css/NavigationBar.css';

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
                    <a className="icon" onClick={this.onIconCLickHandler}>
                        {this.state.responsive ? (<i className="fa fa-close"/>) : (<i className="fa fa-bars"/>)}
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
                                <li><a href="https://www.facebook.com/matheswaaran" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"/></a></li>
                                <li><a href="https://twitter.com/Matheswaaran_S" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"/></a></li>
                                <li><a href="https://plus.google.com/u/0/+Matheswaaran" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"/> </a></li>
                                <li><a href="https://www.linkedin.com/in/matheswaaran" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"/> </a></li>
                                <li><a href="https://www.instagram.com/matheswaaran/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"/> </a></li>
                                <li><a href="https://www.github.com/Matheswaaran" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"/> </a></li>
                            </ul>
                        </div>
                        <div className="copyright">
                            <p>©Matheswaaran all rights reserved</p>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavigationBar;