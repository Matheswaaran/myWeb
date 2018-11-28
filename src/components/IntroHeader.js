import React from 'react';
import '../css/IntroHeader.css'

class IntroHeader extends React.Component {

    render() {
        return (
            <div className="intro-bg gradient-01">
                <div className="intro-container">
                    <div className="name-container">
                        <div className="hello">
                            <h1><span>Hello I'm</span> Matheswaaran</h1>
                            <div className="designation">
                                <span>Developer</span>
                            </div>
                            <div className="intro-button">
                                <a href="https://tinyurl.com/matsresume" target="_blank" rel="noreferrer noopener">Download my Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroHeader;