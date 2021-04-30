import React, { Component, Fragment } from 'react';
import './style.scss';

class ProjectsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: false,
    };
  }
  projectHover = () => {
    this.setState({ hover: true });
  };
  projectHoverOut = () => {
    this.setState({ hover: false });
  };
  render() {
    return (
      <Fragment>
        {(!this.state.hover && (
          <a
            onMouseLeave={this.projectHoverOut}
            onMouseEnter={this.projectHover}
            className="project__card"
            href={this.props.project.url}
            target="__blank"
          >
            <img src={this.props.project.imageUrl} alt={this.props.project.name} />
          </a>
        )) || (
          <a
            onMouseLeave={this.projectHoverOut}
            onMouseEnter={this.projectHover}
            className="project__card-on-hover"
            href={this.props.project.url}
            target="__blank"
          >
            <div className="absolute">
              <h3>{this.props.project.name}</h3>
              <p>
                <strong>Technologies: </strong>
                {this.props.project.technologies}
              </p>
              <a href={this.props.project.githubURL} target="__blank">
                <img
                  className="github-icon__project-card"
                  src="/images/github-white.svg"
                  alt="github-icon"
                />
              </a>
            </div>
            <img src={this.props.project.imageUrl} alt={this.props.project.name} />
          </a>
        )}
      </Fragment>
    );
  }
}

export default ProjectsCard;
