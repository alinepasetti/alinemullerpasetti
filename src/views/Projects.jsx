import React, { Fragment } from 'react';
import ProjectsCard from './../components/ProjectsCard';
import projects from './../projects.json';
import './../App.scss';

function Header() {
  return (
    <Fragment>
      {projects.map((project) => {
        return <ProjectsCard key={project.name} project={project} />;
      })}
    </Fragment>
  );
}

export default Header;
