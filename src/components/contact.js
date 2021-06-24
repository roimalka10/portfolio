import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaHtml5, FaGitAlt, FaReact, FaGithub, FaSass } from "react-icons/fa";
import { SiCss3, SiVisualstudiocode, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="contact"
        >
          <motion.div
            initial={{ y: "150vh" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "tween",
              stiffness: 70,
            }}
            className="contact-about"
          >
            <div className="big-text">About</div>
            <div className="about-text">
              <a href="/" className="back-icon">
                <FaTimes size={45} />
              </a>
              <div className="contact-text2">
                <h2>About Me.</h2>
                <p className="p-text2">Front-end Web Developer</p>
                <p class="about-me-text">
                  I'm Roi Malka, a <strong>Front-end developer</strong>. A chill
                  guy who likes making things with web technologies. <br />I
                  like to <strong>resolve</strong> design problems,{" "}
                  <strong>create</strong> smart user interface and{" "}
                  <strong>imagine</strong> useful interaction, developing rich
                  web experiences &amp; <strong>web applications</strong>.{" "}
                  <br /> I <strong>build</strong> new projects just to tickle my
                  brain and love explaining others how they're made.{" "}
                  <strong>for hire</strong>.
                </p>
              </div>
              <ul className="about-me-list">
                <div>
                  <li className="icon1">
                    <span className="icon-html5 spancss">
                      <FaHtml5 className="icon-size" />
                    </span>
                    <span> HTML5</span>
                  </li>
                  <li className="icon1">
                    <span className="icon-css3 spancss">
                      <SiCss3 size={15} className="icon-size" />
                    </span>
                    <span> CSS3</span>
                  </li>
                  <li className="icon1">
                    <span className="icon-javascript spancss">
                      <SiJavascript size={15} className="icon-size" />
                    </span>
                    <span> JavaScript</span>
                  </li>
                  <li className="icon1">
                    <span className="icon-react spancss">
                      <FaReact size={15} className="icon-size" />
                    </span>
                    <span> React</span>
                  </li>
                </div>
                <div>
                  <li className="icon1">
                    <span className="icon-git spancss">
                      <FaGitAlt size={15} className="icon-size" />
                    </span>
                    <span> Git</span>
                  </li>
                  <li className="icon1">
                    <span className="icon-github spancss">
                      <FaGithub size={15} className="icon-size" />
                    </span>
                    <span> GitHub</span>
                  </li>
                  <li className="icon1">
                    <span className="icon-vscode spancss">
                      <SiVisualstudiocode size={15} className="icon-size" />
                    </span>
                    <span> VSCode</span>
                  </li>
                  <li className="icon1">
                    <span className="icon-sass spancss">
                      <FaSass size={15} className="icon-size" />
                    </span>
                    <span> Sass</span>
                  </li>
                </div>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: "-150vh" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "tween",
              stiffness: 70,
            }}
            className="contact-submit"
          >
            <div className="big-text2">Contact</div>
            <div className="submit-text">
              <a href="/" className="back-icon2">
                <FaTimes size={45} />
              </a>
              <div className="contact-text">
                <div className="h2-text">
                  <h2>Let's talk.</h2>
                </div>
                <div className="p-text2">
                  <p>Have a question or want to work together?</p>
                </div>
              </div>
              <div className="form-container" id="contact-form">
                <form
                  action="https://formspree.io/f/mpzkdonw"
                  target="_blank"
                  method="POST"
                >
                  <label for="Name">Name</label>
                  <div className="form-padding">
                    <input
                      className="inputs"
                      type="text"
                      name="name"
                      id="name"
                      required
                    />
                  </div>
                  <label for="email">Email</label>
                  <div class="form-padding">
                    <input
                      className="inputs"
                      type="email"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  <label for="message">Message</label>
                  <div class="form-padding">
                    <textarea
                      className="inputs"
                      name="message"
                      id="message"
                      rows="3"
                    ></textarea>
                  </div>
                  <button className="btn1" type="submit">
                    <span class="button-text">Submit</span>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
