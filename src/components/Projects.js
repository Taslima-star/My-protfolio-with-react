function Projects() {
  return (
    <section id="projects" style={{ padding: '2rem', backgroundColor: '#181818' }}>
      <h2>Projects</h2>
      {/* Project 1 */}
      <div style={{ marginBottom: '2rem', backgroundColor: '#2a2a2a', padding: '1rem', borderRadius: '10px' }}>
        <h3>Abeda-E-Dastarkhwan:Restaurant Website </h3>
        <p>
          A full-stack task management application built using <strong>HTML,CSS & Javascript</strong> for the frontend,
          <strong> PHP</strong> for the backend, and <strong>MySQL</strong>
          as the database. Abeda‑E‑Dastarkhwan is a fully responsive restaurant website crafted to showcase rich South Asian culinary heritage. Designed with a clean, modern aesthetic, the site invites users into a virtual dastarkhawn—a traditional communal dining spread—celebrating authenticity, culture, and hospitality

        </p>

      </div>

      {/* Project 2 */}
      <div style={{ backgroundColor: '#2a2a2a', padding: '1rem', borderRadius: '10px' }}>
        <h3>WanderGo-Travel:a static multi-page travel website</h3>
        <p>
          A responsive travel browsing portal crafted with semantic HTML, CSS, and vanilla JavaScript. The platform enables users to explore themed destinations (e.g., Local Street Food, Ocean Breeze Resort), view curated packages and hotel listings, apply filters, and navigate seamlessly to booking/contact pages. Emphasizes mobile-first design, visual storytelling via themed cards, and intuitive user engagement throughout
        </p>

      </div>
    </section>
  );
}
export default Projects;
