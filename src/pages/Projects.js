import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h1>My Projects</h1>

      <div className="project">
        <h2>Project One: Abeda-E-Dastarkhwan</h2>
        <p>
          Abeda‑E‑Dastarkhwan is a dynamic and visually engaging restaurant website crafted to showcase culinary offerings beautifully while providing seamless user interaction. Leveraging a blend of frontend and backend technologies, this platform delivers a rich and responsive online dining experience. </p>
         
            <h3>Technology Stack</h3>

 <p>Frontend: HTML, CSS, JavaScript — seamless layout and script-based interactivity.

Backend: PHP — server-side processing to handle orders and user interactions.

Database: MySQL — robust storage for menus, orders, and reservation data.
          </p>
        <a href="https://github.com/Taslima-star/Abeda-E-Dastarkhwan" target="_blank" rel="noopener noreferrer">
          View Code
        </a>
        {' | '}
        <a href="https://taslima-star.github.io/Abeda-E-Dastarkhwan/" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>

      <div className="project">
        <h2>Project Two: WanderGo-Travel</h2>
        <p>
          WanderGo Travel is a clean and engaging travel web platform built using HTML5, CSS3, and JavaScript. Designed with responsiveness in mind, it allows users to seamlessly explore travel destinations, accommodation, dining, and adventure packages across all device types.
        </p>
        <h3>Technology Stack</h3>
        <p>
          Frontend: Purely built with HTML5, enhanced with CSS3 styling and JavaScript interactivity.Responsive & Cross‑Device: Ensures optimal viewing and performance across devices—from phones to desktops
        </p>
        <a href="https://github.com/Taslima-star/WanderGo-Travel" target="_blank" rel="noopener noreferrer">
          View Code
        </a>
        {' | '}
        <a href="https://taslima-star.github.io/WanderGo-Travel/" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </section>
  );
}

export default Projects;
