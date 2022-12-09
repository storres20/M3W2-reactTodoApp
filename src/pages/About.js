import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div className="about__content">
      <ul className="about__list">
        <NavLink to="/about/about-app">About App</NavLink>
        <NavLink to="/about/about-author">About Author</NavLink>
      </ul>
    </div>
  );
}

export default About;
