import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    if (window.innerHeight < 1366) {
      Aos.init({
        duration: 500,
      });
    }
  }, []);

  return (
    <div className="skills">
      <h2 className="skills-title" data-aos="fade-left">Habilidades</h2>
      <div className="skills-content" data-aos="fade-right">
        <ul className="skills-content-list">
          <em>
            <li className="skills-content-list-item">HTML</li>
            <li className="skills-content-list-item">CSS</li>
            <li className="skills-content-list-item">JS</li>
            <li className="skills-content-list-item">REACT</li>
            <li className="skills-content-list-item">SASS</li>
            <li className="skills-content-list-item">BOOTSTRAP</li>
            <li className="skills-content-list-item">JEST</li>
          </em>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
