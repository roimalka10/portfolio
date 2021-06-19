import React from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home" name="home-id">
      <motion.div
        className="name-logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{
          duration: 0.5,
          delay: 2.1,
        }}
      >
        <img src="https://res.cloudinary.com/noname-m-/image/upload/v1622245542/images/namelogo_hpncdo.png" />
      </motion.div>
      <div className="home-content">
        <div className="home-content-main">
          <motion.div
            className="home-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <h1>Roi Malka</h1>
          </motion.div>
          <motion.div
            className="home-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.9,
            }}
          >
            <h3>
              Front-end Developer
              <br /> & Designer
            </h3>
          </motion.div>

          <motion.a
            className="btn"
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.1,
            }}
          >
            Latest Projects
          </motion.a>

          <motion.ul
            className="icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.1,
            }}
          >
            <li>
              <a href="https://github.com/roimalka10" target="_blank">
                <FaGithub size={30} className="icon-size" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/roi-malka/" target="_blank">
                <FaLinkedinIn size={30} className="icon-size" />
              </a>
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
