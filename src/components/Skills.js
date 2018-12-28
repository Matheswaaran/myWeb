import React from 'react';
import '../css/Skills.css';
import SectionTitle from './SectionTitle';

class Skills extends React.Component{
  render() {
    return (
      <section id="skills" className="my-skill white-bg page-section">
        <div className="container-fluid">
          <SectionTitle span={12} title="My Skills" description="What I am good at..."/>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="skill">
                <ul>
                  {this.props.resume.skills.map((skill, index) => {
                    if (index%2 === 0) {
                      return (
                        <li key={index}>{skill.name}
                          <div className="bar_container">
                        <span className="bar" style={{ background: '#07cb79', width: `${skill.percentage}` }}>
                          <span className="pct" style={{ opacity: 1 }}>{`${skill.percentage}`}</span>
                        </span>
                          </div>
                        </li>
                      )
                    } else {
                      return null
                    }
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="skill">
                <ul>
                  {this.props.resume.skills.map((skill, index) => {
                    if (index%2 !== 0) {
                      return (
                        <li key={index}>{skill.name}
                          <div className="bar_container">
                            <span className="bar" style={{ background: '#07cb79', width: `${skill.percentage}` }}>
                              <span className="pct" style={{ opacity: 1 }}>{`${skill.percentage}`}</span>
                            </span>
                          </div>
                        </li>
                      )
                    } else {
                      return null
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills;