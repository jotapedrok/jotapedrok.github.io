import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function ProjectCard({
  cardName,
  cardDescription,
  thumb,
  projectId,
}) {
  useEffect(() => {
    if (window.innerHeight > 1366) {
      Aos.init({
        duration: 200,
        delay: 0,
      });
    }
  }, []);
  return (
    <Link
      className="link-project"
      to={`/projects/${projectId}`}
    >
      <div data-aos="zoom-out" className="project-card">
        <div className="div-upper-project">
          <p>conheça mais deste projeto</p>
        </div>
        <div className="project-card-image-container">
          <img src={thumb} alt={`${cardName} thumb`} />
        </div>
        <div className="project-card-content">
          <div className="project-card-content-title">
            <h1>{ cardName }</h1>
          </div>
          <div className="project-card-content-coment">
            <p>{ cardDescription }</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

ProjectCard.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  thumb: propTypes.string.isRequired,
  projectId: propTypes.number.isRequired,
};
