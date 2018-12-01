import React from 'react';
import '../css/IntroHeader.css'
import {graphql, StaticQuery} from "gatsby";

class IntroHeader extends React.Component {

    render() {
        return (
            <StaticQuery
                query={graphql`query { dataJson{ id name introHeader { designation } resumeUrl } }`}
                render={(data) => (
                    <div className="intro-bg gradient-01">
                        <div className="intro-container">
                            <div className="name-container">
                                <div className="hello">
                                    <h1><span>Hello I'm</span> {data.dataJson.name}</h1>
                                    <div className="typer">
                                        <h2>{data.dataJson.introHeader.designation}</h2>
                                    </div>
                                    <div className="intro-button">
                                        <a href={data.dataJson.resumeUrl} target="_blank" rel="noreferrer noopener">Download my Resume</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            />
        );
    }
}

export default IntroHeader;