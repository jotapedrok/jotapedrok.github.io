import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    if (window.innerHeight < 1366) {
      Aos.init({
        duration: 300,
        offset: 10,
      });
    }
  }, []);

  return (
    <div className="skills">
      <h2 className="skills-title" data-aos="fade-down">Habilidades</h2>
      <div className="skills-content" data-aos="fade-right">
        <ul className="skills-content-list">
          <em>
            <li className="skills-content-list-learned-item">HTML</li>
            <li className="skills-content-list-learned-item">CSS</li>
            <li className="skills-content-list-learned-item">JS</li>
            <li className="skills-content-list-learned-item">REACT</li>
            <li className="skills-content-list-learned-item">SASS</li>
            <li className="skills-content-list-learned-item">BOOTSTRAP</li>
            <li className="skills-content-list-learned-item">JEST</li>
            <li className="skills-content-list-to-learn-item">REACT NATIVE</li>
          </em>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
