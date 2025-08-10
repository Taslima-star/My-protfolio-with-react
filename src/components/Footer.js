import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Taslima Nisan | Full Stack Web Developer</p>
      <p>
        <a href="mailto:taslimanisan69@gmail.com">taslimanisan69@gmail.com</a> | 
        <a href="https://github.com/Taslima-star" target="_blank" rel="noreferrer"> GitHub</a> | 
        <a href="https://www.linkedin.com/in/taslima-nisan-217220259/" target="_blank" rel="noreferrer"> LinkedIn</a>
      </p>
    </footer>
  );
}

export default Footer;
