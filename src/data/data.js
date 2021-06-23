import portfolio from "../images/portfolio1.jpg";
import portfolio2 from "../images/portfolio2.jpg";
import trainer from "../images/training.jpg";
import trainer2 from "../images/training2.jpg";
import nasa2 from "../images/nasa2.jpg";
import wildfire from "../images/wildfire.jpg";
import tesla from "../images/tesla.jpg";
import tesla2 from "../images/tesla2.jpg";
import distorted from "../images/distorted.jpg";
import distorted2 from "../images/distorted2.jpeg";
import distorted3 from "../images/distorted3.jpg";

export const projects = [
  {
    id: 1,
    title: "Portfolio",
    img: portfolio,
    img2: portfolio2,
    distort: distorted,
    type: "React / Sass / Framer Motion",
    github: "https://github.com/roimalka10/portfolio",
    link: "",
  },
  {
    id: 2,
    title: "Wildfire Tracker",
    img: nasa2,
    img2: wildfire,
    distort: distorted2,
    type: "React / Sass / NASA API",
    github: "https://github.com/roimalka10/wildfire-tracker",
    link: "https://wildfires-tracker-roimalka.netlify.app",
  },
  {
    id: 3,
    title: "Personal Trainer Studio",
    img: trainer2,
    img2: trainer,
    distort: distorted2,
    type: "React / Sass / Framer Motion",
    github: "https://github.com/roimalka10/Fitness-website",
    link: "",
  },
  {
    id: 4,
    title: "Tesla Clone",
    img: tesla,
    img2: tesla2,
    distort: distorted,
    type: "React / Styled Components",
    github: "https://github.com/roimalka10/tesla-clone",
    link: "https://tesla-clone-roimalka.netlify.app",
  },
];
