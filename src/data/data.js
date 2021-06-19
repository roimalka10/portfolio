import portfolio from "../images/project1.jpg";
import trainer from "../images/training.jpg";
import nasaApi from "../images/stars.jpg";
import distorted from "../images/distorted.jpg";

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    img: portfolio,
    img2: nasaApi,
    distort: distorted,
    type: "React / Sass / Framer Motion",
    link: "https://github.com/roimalka10/portfolio",
  },
  {
    id: 2,
    title: "Personal Trainer Studio",
    img: trainer,
    img2: portfolio,
    distort: distorted,
    type: "React / Sass / Framer Motion",
    link: "https://github.com/roimalka10/Fitness-website",
  },
  {
    id: 3,
    title: "Nasa API",
    img: nasaApi,
    img2: portfolio,
    distort: distorted,
    type: "Frontend Web Development",
    link: "https://github.com/roimalka10/Fitness-website",
  },
];
