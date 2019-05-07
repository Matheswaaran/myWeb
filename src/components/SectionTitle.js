import React from 'react';
// import '';

class SectionTitle extends React.Component {
  render() {
    return (
      <div className="row">
        <div className={`col-lg-${this.props.span ? this.props.span : 12} col-md-${this.props.span ? this.props.span : 12}`}>
          <div className="section-title">
            <div className="section-title-name">
              <span>{this.props.description}</span>
              <h2>{this.props.title}</h2>
            </div>
            <div className="title-name-gray">
              <strong>{this.props.title}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTitle;
