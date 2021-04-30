import React from 'react';
import './../App.scss';

function About() {
  return (
    <ul className="about__page">
      <h1 className="title__yellow">About Aline</h1>
      <section className="timeline">
        <div className="arrow-up"></div>
        <li>
          2020 - <strong>Software Developer</strong> - <small>Work Experience @ CTW | BMW Group </small>
        </li>
        <li>
          2020 - <strong>Full-stack Developer</strong> - <small>Bootcamp</small>
        </li>
        <li>
          2019 - <strong>UX Design</strong> - <small>Studies</small>
        </li>
        <li>
          2013:2019 - <strong>Project Management</strong> - <small>Work Experience</small>
        </li>
        <li>
          2013 - <strong>Business Strategies</strong> - <small>MBA</small>
        </li>
        <li>
          2009:2012 - <strong>Advertising</strong> - <small>Bachelor's degree</small>
        </li>
      </section>
    </ul>
  );
}

export default About;
