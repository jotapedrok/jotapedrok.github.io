import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProjectCard({
  cardName,
  cardDescription,
  thumb,
  projectId,
}) {
  return (
    <Link className="link-project" to={`/projects/${projectId}`}>
      <div className="project-card">
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
