import React from "react";

const About = () => {
  return (
    <div className="about">
      <img
          src='https://picsum.photos/300'
          alt="João Pedro sorrindo olhando para baixo com uma câmera no pescoço"
          id="mypic"
        />
        <h2 id="aboutme">Sobre mim</h2>
        <div className="about-content">
          <p class="text-about">Sou um jovem de 22 anos, estudante DEV na "Trybe". Sou <span>brasileiro</span> e atualmente moro em <span>São Gonçalo-RJ</span>. Meus principais interesses são: <strong>jogos, música, audiovisual, humor</strong> e principalmente <strong>conversar</strong>. Gosto muito de passar tempo com minha família, amigos e minha namorada.</p>
        </div>
    </div>
  )
}

export default About;
