import React from "react";
import "./about.scss";
import {
  FaHtml5,
  FaGitAlt,
  FaReact,
  FaNpm,
  FaFigma,
  FaGithub,
} from "react-icons/fa";

import { SiCss3, SiVisualstudiocode, SiJavascript } from "react-icons/si";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-me">
            <h2>About Me</h2>
            <hr />
            <p>
              I'm a Front-end developer. I like to resolve design problems,
              create smart user interface and imagine useful interaction,
              developing rich web experiences & web applications.
            </p>
          </div>
        </div>
      </div>
      <div className="skill-center">
        <div className="headings">
          <h2>Skills</h2>
          <hr />
        </div>
        <section class="skills">
          <div>
            <div class="icon1">
              <span class="icon-html5 spancss">
                <FaHtml5 size={30} className="icon-size" />
              </span>
              <h3>HTML5</h3>
            </div>
          </div>
          <div>
            <div class="icon1">
              <span class="icon-css3 spancss">
                <SiCss3 size={30} className="icon-size" />
              </span>
              <h3>CSS3</h3>
            </div>
          </div>
          <div>
            <div class="icon1">
              <span class="icon-javascript spancss">
                <SiJavascript size={30} className="icon-size" />
              </span>
              <h3>JavaScript</h3>
            </div>
          </div>
          <div>
            <div class="icon1">
              <span class="icon-react spancss">
                <FaReact size={30} className="icon-size" />
              </span>
              <h3>React</h3>
            </div>
          </div>
          <div>
            <div class="icon1">
              <span class="icon-git spancss">
                <FaGitAlt size={30} className="icon-size" />
              </span>
              <h3>Git</h3>
            </div>
          </div>
          <div>
            <div class="icon1">
              <span class="icon-github spancss">
                <FaGithub size={30} className="icon-size" />
              </span>
              <h3>GitHub</h3>
            </div>
          </div>
          <div>
            <div class="icon1">
              <span class="icon-vscode spancss">
                <SiVisualstudiocode size={30} className="icon-size" />
              </span>
              <h3>VSCode</h3>
            </div>
          </div>
          <div>
            <div class="icon1">
              <span class="icon-figma spancss">
                <FaFigma size={30} className="icon-size" />
              </span>
              <h3>Figma</h3>
            </div>
          </div>
          <div>
            <div class="icon1">
              <span class="icon-npm spancss">
                <FaNpm size={30} className="icon-size" />
              </span>
              <h3>npm</h3>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default About;
