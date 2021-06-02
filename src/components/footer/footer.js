import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer" id="footer-id">
      <div className="content">
        <a className="footer-logo">
          <img
            src="https://res.cloudinary.com/noname-m-/image/upload/v1622245542/images/namelogo_hpncdo.png"
            alt="Roi Malka's Personal Logo"
          />
        </a>
        <div className="footer-links">
          <ul className="links">
            <li>
              <a href="https://www.linkedin.com/in/roi-malka/" target="_blank">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/roimalka10" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copy">
          <p>© 2021 Roi Malka - </p>
          <a href="mailto:roimalka10@gmail.com"> Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
