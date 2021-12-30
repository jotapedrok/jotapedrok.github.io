import React from "react";
import { SiAboutdotme } from 'react-icons/si';
import { GiSkills } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="header">
      <nav className="header-nav">
        <div className="about-me-nav">
          <SiAboutdotme />
          <p>Sobre Mim</p>
        </div>
        <div className="skills-nav">
          <GiSkills />
          <p>Habilidades</p>
        </div>
        <div className="interests-nav">
          <AiFillHeart />
          <p>Interesses</p>
        </div>
      </nav>
    </div>
  )
}

export default Header;