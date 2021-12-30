import React from "react";
import { SiAboutdotme } from 'react-icons/si';
import { GiSkills } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="header-nav">
        <Link to="/">
          <div className="about-me-nav">
            <SiAboutdotme />
            <p>Sobre Mim</p>
          </div>
        </Link>
        <Link to="/skills">
          <div className="skills-nav">
            <GiSkills />
            <p>Habilidades</p>
          </div>
        </Link>
        <Link to="/interests">
          <div className="interests-nav">
            <AiFillHeart />
            <p>Interesses</p>
          </div>
        </Link>
      </nav>
      <div className="header-name">
        <h1>Jota Aguiar</h1>
      </div>
    </div>
  )
}

export default Header;