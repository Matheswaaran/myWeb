import React from 'react';
// import '';

class SectionTitle extends React.Component{
  render() {
    return (
      <div className="section-title">
        <div className="section-title-name">
          <span>{this.props.description}</span>
          <h2>{this.props.title}</h2>
        </div>
        <div className="title-name-gray">
          <strong>{this.props.title}</strong>
        </div>
      </div>
    )
  }
}

export default SectionTitle;