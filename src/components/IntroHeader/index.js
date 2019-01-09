import React from 'react';
import './IntroHeader.css';
import { SectionLink } from "react-scroll-section";

class IntroHeader extends React.Component {

  render() {
    return (
      <div className="intro-bg gradient-01">
        <div className="intro-container">
          <div className="name-container">
            <div className="hello">
              <h1><span>Hello I'm</span> {this.props.name}</h1>
              <div className="typer">
                <h2>{this.props.introHeader.designation}</h2>
              </div>
              <div className="intro-button">
                <a href={this.props.introHeader.resumeUrl} target="_blank" rel="noreferrer noopener">Download my Resume</a>
              </div>
            </div>
          </div>
          <SectionLink section="about">
            {link => (<a className="scroll-down" onClick={link.onClick} rel="noreferrer noopener"><i></i></a>)}
          </SectionLink>
        </div>
      </div>
    );
  }
}

export default IntroHeader;