import React, { Component } from 'react';
import './../App.scss';
import SkillCard from '../components/SkillCard';

export default class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { name: 'React.js', icon: '/images/react.svg' },
        { name: 'Node.js', icon: '/images/node-js.svg' },
        { name: 'JavaScript', icon: '/images/javascript.svg' },
        { name: 'TypeScript', icon: '/images/typescript.svg' },
        { name: 'RxJS', icon: '/images/rxjs.svg' },
        { name: 'CSS3', icon: '/images/css.svg' },
        { name: 'Sass', icon: '/images/sass.svg' },
        { name: 'HTML5', icon: '/images/html5.svg' },
        { name: 'Handlebars', icon: '/images/handlebar.png' },
        { name: 'MongoDB', icon: '/images/mongo.svg' },
      ],
    };
  }
  render() {
    return (
      <section className="skills__page">
        <h1>Skills</h1>
        <div className="skills_section">
          {this.state.skills.map((skill) => {
            return <SkillCard skill={skill} />;
          })}
        </div>
      </section>
    );
  }
}
