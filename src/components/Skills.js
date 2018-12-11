import React from 'react';
import '../css/Skills.css';
import SectionTitle from './SectionTitle';

class Skills extends React.Component{
  render() {
    return (
      <section id="skills" className="my-skill white-bg page-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <SectionTitle title="My Skills" description="What I am good at..."/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills;