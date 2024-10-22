import React from 'react';
import { Link } from 'react-router-dom'; // Use React Router for navigation

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experiences">Experiences</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/references">References</Link></li>
      </ul>
    </nav>
  );
};


