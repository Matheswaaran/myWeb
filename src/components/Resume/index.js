import React from 'react';
import './Resume.css';
import SectionTitle from '../SectionTitle';

const Resume = props => (
  <section id="resume" className="resume white-bg page-section">
    <div className="container-fluid">
      <SectionTitle span={12} title="Resume" description="My Work Experience" />
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <h2>Experience : </h2>
        </div>
      </div>
      {props.resume.experience.map((ex, index) => (
        <div className="resume-block" key={index}>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="resume-icon">
                <span className="fa fa-graduation-cap" />
              </div>
              <div className="resume-name">
                <a href={ex.companyWebsite} target="_blank" rel="noopener noreferrer"><h3>{ex.company}</h3></a>
                <span>
                  {ex.from}
                  {' '}
to
                  {' '}
                  {ex.to}
                </span>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="resume-info">
                <h3>{ex.designation}</h3>
                <p>{ex.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <h2>Education : </h2>
        </div>
      </div>
      {props.resume.education.map((edu, index) => (
        <div className="resume-block" key={index}>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="resume-icon">
                <span className="fa fa-graduation-cap" />
              </div>
              <div className="resume-name">
                <h3><a href={edu.collegeWebsite} target="_blank" rel="noopener noreferrer">{edu.college}</a></h3>
                <span>
                  {edu.from}
                  {' '}
to
                  {' '}
                  {edu.to}
                </span>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="resume-info">
                <h3>{edu.course}</h3>
                <p>{edu.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Resume;
