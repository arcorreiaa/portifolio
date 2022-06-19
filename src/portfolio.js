import Terrorflix from "../src/assets/img/terrorflix.gif";
import Todo from "../src/assets/img/todo.gif";
import Calculadora from "../src/assets/img/calculadora.gif";
import Gasto from "../src/assets/img/gastomen.gif";
import Calimc from "./assets/img/calimc.gif";
import Flix from "./assets/img/flix.gif";
import GrandChase from "./assets/img/grandchase.gif";
import Kaspper from "./assets/img/Kaspper.gif";
import Aluguel from "./assets/img/Alugando.gif";
import Arcoplay from "./assets/img/ARCOPLAY.gif";

const header = {
  // atualizei e coloquei meu curriculum
  homepage: "#",
  title: "AR.",
};

const about = {
  // aqui tem um pouco de mim
  name: "Alysson Rychard",
  role: "Front End Developer",
  description:
    "I am a person very passionate about the technology area. I usually play and study in my spare time and I love motorcycles..",
  resume:
    "https://drive.google.com/file/d/1fZLmiWCCdCs1t3PSM8pVkTCwlVq-EtQF/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/arcorreiaa/",
    github: "https://github.com/arcorreiaa",
  },
};

const projects = [
  // alguns projetos
  {
    name: "TERROFLIX",
    description:
      "a project where I listed the horror movies that I think are the best I watch. this project I learned to use a little bit of JQUERY and each banner from the movie is linked to its trailer on youtube",
    stack: ["HTML", "CSS", "JavaScript"],
    sourceCode: "https://github.com/arcorreiaa/netflix-clone-terrorflix",
    livePreview: "https://arcorreiaa.github.io/netflix-clone-terrorflix/",
    img: Terrorflix,
    type: "web",
  },
  {
    name: "TODO LIST Web",
    description:
      "a simple todolist to add, list and delete. in this project I had my first contact with TypeScript and the project is responsive",
    stack: ["TypeScript", "HTML", "CSS"],
    sourceCode: "https://github.com/arcorreiaa/todo",
    livePreview: "https://arcorreiaa.github.io/todo/",
    img: Todo,
    type: "web",
  },
  {
    name: "CALCULATOR",
    description:
      "A calculator with just the basics. in this project I had a difficulty with JavaScript, but in the end I managed to resolve the errors and ended",
    stack: ["HTML", "CSS", "JavaScript"],
    sourceCode: "https://github.com/arcorreiaa/calculadora",
    livePreview: "https://arcorreiaa.github.io/calculadora/",
    img: Calculadora,
    type: "web",
  },
  {
    name: "EXPENSE",
    description:
      "a mini expense tracking system made with TypeScript. It saves your expenses in the browser's memory and it was quite challenging for me, I confess that I finished this project with a taste of victory. I worked with routes, with a lot of useState and useEffect and practiced a lot of componentization",
    stack: ["HTML", "CSS", "TypeScript"],
    sourceCode: "https://github.com/arcorreiaa/gasto-mensal",
    livePreview: "https://arcorreiaa.github.io/gasto-mensal/",
    img: Gasto,
    type: "web",
  },
  {
    name: "CALIMC",
    description:
      "My first React Native app with EXPO. It is an application that calculates BMI and is initially in version 1.0",
    stack: ["React-Native", "Expo", "JavaScript"],
    sourceCode: "https://github.com/arcorreiaa/CALIMC",
    livePreview:
      "https://drive.google.com/file/d/1eQ71ATsOf-RxktNPEVsdx4Vwdf7iuQ6A/view?usp=sharing",
    img: Calimc,
    type: "mobile",
  },
  {
    name: "FLIX",
    description:
      "A challenging application, where you can buy home insurance, in this challenge I learned and delved into Hook and useStates and useEffects. I participated in this project that was rich in knowledge and challenges",
    stack: [
      "React-Native",
      "Expo",
      "JavaScript",
      "PYNTHON",
      "Firebase Analitycs",
    ],
    sourceCode: "https://github.com/arcorreiaa",
    livePreview: "https://www.flix.com.vc",
    img: Flix,
    type: "mobile",
  },
  {
    name: "GCBLOG",
    description:
      "Mini blog of one of my favorite games. My first personal project. Where I had several challenges and in it I learned to create a CMS API with Strapi, several libs were used",
    stack: [
      "React-Native",
      "Expo",
      "JavaScript",
      "Strapi",
      "React Navigation",
      "React Animatable",
    ],
    sourceCode: "https://github.com/arcorreiaa/gcblog",
    livePreview:
      "http://haldreysom.no.comunidades.net/imagens/mapa_nao_disponivel.jpg",
    img: GrandChase,
    type: "mobile",
  },
  {
    name: "TODO LIST APP",
    description:
      "Instead of just saving the data locally, you can register and login to a database on the cloud (Firebase). Being able to create, change and delete notes, taking today's date and its location. When logging in or creating the account, user data is saved locally.",
    stack: [
      "React Native",
      "Styled Components",
      "Expo Location",
      "Expo",
      "JavaScript",
      "React Native Async Storage",
      "React Navigation",
      "Firebase",
      "Moment",
    ],
    sourceCode: "https://github.com/arcorreiaa/kaspper",
    livePreview:
      "https://expo.dev/artifacts/d85fa8db-3742-48f5-b01c-6372c7851b69",
    img: Kaspper,
    type: "mobile",
  },
  {
    name: "RENT APP",
    description:
      "A mini app where I practiced Navigation, FlatList, Swiper, ScrollView",
    stack: [
      "React Native",
      "Google Fonts",
      "Expo",
      "JavaScript",
      "React Navigation",
      "React Navigation Stack",
    ],
    sourceCode: "https://github.com/arcorreiaa/alugando",
    livePreview:
      "http://haldreysom.no.comunidades.net/imagens/mapa_nao_disponivel.jpg",
    img: Aluguel,
    type: "mobile",
  },
  {
    name: "ARCOPLAY APP",
    description: "A simple audio player that has some very simple features",
    stack: [
      "React Native",
      "Expo media Library",
      "React Native Async Storage",
      "React Navigation",
      "React Native Masked-View",
      "React Native Slider",
      "Expo",
      "JavaScript",
    ],
    sourceCode: "https://github.com/arcorreiaa/arcoplay",
    livePreview:
      "https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40arcorreiaa/audio-player-7bbe194bb50f43e0afcaa396264368e6-signed.apk",
    img: Arcoplay,
    type: "mobile",
  },
];

const skills = [
  // sempre ta atualizando

  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node",
  "Git",
  "Tailwindcss",
  "Firebase",
  "Photoshop",
  "Bootstrap",
  "React-Native",
  "Github",
];

const contact = {
  // meu email
  email: "arcorreiaa@gmail.com",
};

export { header, about, projects, skills, contact };
