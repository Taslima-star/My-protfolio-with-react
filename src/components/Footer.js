import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p>© 2025 Taslima Nisan</p>
      <div style={{ marginTop: '0.5rem' }}>
        <a
          href="https://github.com/Taslima-star"
          target="_blank"
          rel="noreferrer"
          style={{ margin: '0 10px' }}
        >
          <FaGithub size={24} color="#61dafb" />
        </a>
        <a
          href="https://www.linkedin.com/in/taslima-nisan-217220259/"
          target="_blank"
          rel="noreferrer"
          style={{ margin: '0 10px' }}
        >
          <FaLinkedin size={24} color="#61dafb" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
