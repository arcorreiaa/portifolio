import Terrorflix from "../src/assets/img/terrorflix.gif";
import Todo from "../src/assets/img/todo.gif";
import Calculadora from "../src/assets/img/calculadora.gif";
import Gasto from "../src/assets/img/gastomen.gif";

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
  resume: "https://www.instagram.com/arcoofc/",
  social: {
    linkedin: "https://www.linkedin.com/in/arcorreiaa/",
    github: "https://github.com/arcorreiaa",
  },
};

const projects = [
  // alguns projetos
  {
    name: "TerrorFlix",
    description:
      "a project where I listed the horror movies that I think are the best I watch. this project I learned to use a little bit of JQUERY and each banner from the movie is linked to its trailer on youtube",
    stack: ["HTML", "CSS", "JavaScript"],
    sourceCode: "https://github.com/arcorreiaa/netflix-clone-terrorflix",
    livePreview: "https://arcorreiaa.github.io/netflix-clone-terrorflix/",
    img: Terrorflix,
  },
  {
    name: "Lista de Tarefas",
    description:
      "a simple todolist to add, list and delete. in this project I had my first contact with TypeScript and the project is responsive",
    stack: ["TypeScript", "HTML", "CSS"],
    sourceCode: "https://github.com/arcorreiaa/todo",
    livePreview: "https://arcorreiaa.github.io/todo/",
    img: Todo,
  },
  {
    name: "Calculadora Simples",
    description:
      "A calculator with just the basics. in this project I had a difficulty with JavaScript, but in the end I managed to resolve the errors and ended",
    stack: ["HTML", "CSS", "JavaScript"],
    sourceCode: "https://github.com/arcorreiaa/calculadora",
    livePreview: "https://arcorreiaa.github.io/calculadora/",
    img: Calculadora,
  },
  {
    name: "Gasto Mensal",
    description: "a mini expense control system made with TypeScript",
    stack: ["HTML", "CSS", "TypeScript"],
    sourceCode: "https://github.com/arcorreiaa/gasto-mensal",
    livePreview: "https://arcorreiaa.github.io/gasto-mensal/",
    img: Gasto,
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
  "Photoshop",
  "Bootstrap",
];

const contact = {
  // meu email
  email: "arcorreiaa@gmail.com",
};

export { header, about, projects, skills, contact };
