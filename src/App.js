
function App() {
  return (
    <div className="App">
      <body>
        <h1 id="nome">João Pedro de Aguiar Santos</h1>
        <ul>
          <li><a href="#aboutme">Sobre mim</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#desimp">Canal de interesse</a></li>
        </ul>
        <img
          src="../WhatsAppImage2020-08-16at01.42.16.jpeg"
          alt="João Pedro sorrindo olhando para baixo com uma câmera no pescoço"
          id="mypic"
        />
        <h2 id="aboutme">Sobre mim</h2>
        <p class="text-about">Sou um jovem de 22 anos, estudante DEV na "Trybe". Sou <span>brasileiro</span> e atualmente moro em <span>São Gonçalo-RJ</span>. Meus principais interesses são: <strong>jogos, música, audiovisual, humor</strong> e principalmente <strong>conversar</strong>. Gosto muito de passar tempo com minha família, amigos e minha namorada.</p>
        <h2 id="skills">Habilidades</h2>
        <ul id="skills-list"><em>
          <li class="ediçaoskill">Edição e Captação Audiovisual</li>
          <li class="designskill">Design Gráfico</li>
          <li>Comunicação</li>
          <li>Pacote Office</li>
          <li>Escrita Cómica</li>
        </em></ul>
        <h2>Canal de Interesse</h2>
        <a
          href="https://www.youtube.com/user/Desimpedidos/featured"
          rel="noreferrer"
          target="_blank"
          id="desimp"
        >
          Um Pouco de Humor e Esportes - Desimpedidos
        </a>
        <ul>
          <li><a href="#nome">Nome e foto</a></li>
          <li><a href="#aboutme">Sobre mim</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#desimp">Canal de interesse</a></li>
        </ul>
        <h3><a href="#mypic">Foto</a></h3>
        <a
          href="https://jotapedrok.github.io/sd-015-a-project-todo-list/"
          target="_blank"
          rel="noreferrer"
        >
          Lista de Tarefas
        </a>
        <a
          href="https://jotapedrok.github.io/sd-015-a-project-pixels-art/"
          target="_blank"
          rel="noreferrer"
        >
          Pixels Art
          </a>

      </body>
    </div>
  );
}

export default App;
