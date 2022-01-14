import imgRecipesApp1 from './images/app-de-receitas/imag1.jpeg';
import imgRecipesApp2 from './images/app-de-receitas/imag2.jpeg';
import imgRecipesApp3 from './images/app-de-receitas/imag3.jpeg';
import imgRecipesApp4 from './images/app-de-receitas/imag4.jpeg';
import thumbRecipesApp from './images/app-de-receitas/thumb.jpeg';
import imgPixelArt1 from './images/pixel-art-canva/imag1.jpeg';
import thumbPixelArt from './images/pixel-art-canva/thumbPixelArt.jpeg';
import imgStop1 from './images/stop/imag1.jpeg';
import imgStop2 from './images/stop/imag2.jpeg';
import imgStop3 from './images/stop/imag3.jpeg';
import imgStop4 from './images/stop/imag4.jpeg';
import imgStop5 from './images/stop/imag5.jpeg';
import imgStop6 from './images/stop/imag6.jpeg';

//  Modelo Objeto
//   {
//   name: '',
//   id: '',
//   shortDescription: '',
//   descrioition: '',
//   thumb: '',
//   pics: [],
//   youtubeLink: '',
//   repositoryLink: '',
//   projectLink: '',
//   updateDate: '',
//   updateDescription: '',
// };

const projects = [
  {
    name: 'App de Receitas',
    id: 1,
    shortDescription: 'Projeto proposto pela Trybe de um APP de receitas mobile. feito em grupo',
    descrioition: 'Esse projeto foi feito por 5 pessoas estudantes da Trybe. Nos foi proposto fazer um app de receitas com todas as suas funcionalidades em 10 dias, por conta de alguns imprevistos, fizemos em 7 dias as funcionalidades e a estilização. A estilização segue o padrão do Figma proposto, breve pretendo estar estilizando novamente o projeto de uma forma mais pessoal e refatoranto o código.',
    thumb: thumbRecipesApp,
    pics: [imgRecipesApp1,
      imgRecipesApp2,
      imgRecipesApp3,
      imgRecipesApp4,
      thumbRecipesApp],
    youtubeLink: '',
    repositoryLink: 'https://github.com/jotapedrok/recipes-app',
    projectLink: 'https://recipes-app-jotapedrok.vercel.app/',
    updateDate: '14/01/2022',
    updateDescription: 'Deploy do aplicativo pelo Vercel',
    mobile: true,
    browser: false,
  },
  {
    name: 'Pixel Art Canva',
    id: 2,
    shortDescription: 'Um dos primeiros pojetos na Trybe. Feito em Html, Css e Js puro',
    descrioition: 'Esse foi um dos primeiros projetos que fizemos na Trybe em Agosto de 2021. É um pequeno quadro de pixel. Toda vez que você entra no site ele gera 4 cores aleatórias, você pode selecionar uma dessas cores e criar uma arte de pixels. Você também pode alterar o tamanho do Canva, se preferir. Uma marca dos meus primeiros aprendizados de programação',
    thumb: thumbPixelArt,
    pics: [imgPixelArt1, thumbPixelArt],
    youtubeLink: '',
    repositoryLink: 'https://github.com/jotapedrok/pixel-art-canva',
    projectLink: 'https://jotapedrok.github.io/pixel-art-canva/',
    updateDate: '14/08/2021',
    updateDescription: 'Correção de StyleLint',
    mobile: false,
    browser: true,
  },
  {
    name: 'Stop',
    id: 3,
    shortDescription: 'Projeto feito em HTML, CSS e JS Puro para jogar STOP com os amigos',
    descrioition: 'Certa vez estava com meus amigos em uma mesa e queriamos jogar stop. Nenhum de nós queria baixar um aplicativo e foi consideravelmente custoso conseguir caneta e papel para todos os amigos. Nesse dia decidi fazer esse app, para que fosse um site de fácil acesso onde poderiamos fazer todas as funções que fariamos no papel, jogando STOP. Esse site tb foi feito no início dos meus aprendizados de programação e é totalmente feito em HTML, CSS e JS Puro. A imagem referente a um menu, no canto superior esquerdo, ainda não é usual',
    thumb: imgStop1,
    pics: [imgStop1,
      imgStop2,
      imgStop3,
      imgStop4,
      imgStop5,
      imgStop6,
    ],
    youtubeLink: '',
    repositoryLink: 'https://github.com/jotapedrok/stop',
    projectLink: 'https://jotapedrok.github.io/stop/',
    updateDate: '',
    updateDescription: '',
    mobile: true,
    browser: false,
  },
];

export default projects;
