import React from 'react';
import './style.scss';

function SkillCard(props) {
  return (
    <div className="skill__card">
      <img src={props.skill.icon} alt="" />
      <h5>{props.skill.name}</h5>
    </div>
  );
}

export default SkillCard;
