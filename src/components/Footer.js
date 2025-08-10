import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Taslima Nisan | Full Stack Web Developer</p>
      <p>
        <a href="mailto:taslimanisan69@gmail.com">
          <FaEnvelope /> Email
        </a> | 
        <a href="https://github.com/Taslima-star" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a> | 
        <a href="https://www.linkedin.com/in/taslima-nisan-217220259/" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;
