import React from 'react';
import './MyProjects.css';
import SectionTitle from '../SectionTitle';

const MyProjects = props => (
  <section id="my_projects" className="resume white-bg page-section">
    <div className="container-fluid">
      <SectionTitle span={12} title="My Projects" description="What I am doing" />
      {props.myProjects.map((project, index) => (
        <div className="resume-block" key={index}>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="resume-name">
                <h3>{project.name}</h3>
                <span>{`${project.fromTime} to ${project.toTime}`}</span>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="resume-info">
                <h3>{project.title}</h3>
                <p>
                  {project.description}
                  {' '}
                  <br />
                  <b>Tools Used:</b>
                  {' '}
                  {project.toolsUsed}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MyProjects;
