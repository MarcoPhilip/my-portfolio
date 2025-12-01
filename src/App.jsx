// src/App.jsx
import './App.css'
import profilePic from './assets/self.jpeg'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Marco Philip Agapito</div>
        <nav className="nav">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="section hero">
                <div className="section-inner hero-layout">
                  <div className="hero-left">
                    <p className="hero-eyebrow">Junior Software Engineer</p>
                    <h1>Hi, I’m Marco.</h1>
                    <p className="hero-tagline">
                      I’m a full-stack developer focused on building clean, user-friendly web
                      applications using React, Node.js, Express, and MongoDB. I recently
                      completed an intensive software engineering immersive where I built
                      real-world projects from scratch.
                    </p>
                    <div className="hero-actions">
                      <a href="#projects" className="btn primary">View My Work</a>
                      <a href="#contact" className="btn ghost">Contact Me</a>
                    </div>
                  </div>

            <div className="hero-right">
              <img src={profilePic} alt="Marco Agapito" className="profile-pic" />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-inner">
            <h2>About Me</h2>
            <p>
              I’m a Junior Software Engineer with hands-on experience building
              full-stack applications using React, Node.js, Express, MongoDB,
              and Django. My background in autonomous vehicle operations at Waymo
              strengthened my technical problem-solving, attention to detail,
              and communication with engineering teams.
            </p>
            <p>
              I thrive in collaborative environments, enjoy breaking down complex
              problems, and love turning ideas into functional products. I’m currently
              seeking my first Software Engineering role where I can grow,
              contribute, and continue building real-world applications.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-inner">
            <h2>Skills</h2>

            <div className="skills-grid">
              <div className="card">
                <h3>Languages</h3>
                <p>JavaScript (ES6+), Python, HTML5, CSS3</p>
              </div>

              <div className="card">
                <h3>Frontend</h3>
                <p>React (Hooks), Vite, Responsive Design</p>
              </div>

              <div className="card">
                <h3>Backend</h3>
                <p>Node.js, Express.js, REST APIs, MongoDB/Mongoose, Django</p>
              </div>

              <div className="card">
                <h3>Tools</h3>
                <p>Git & GitHub, Postman, npm, Netlify, Vercel, Render</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-inner">
            <h2>Projects</h2>

            <div className="projects-grid">
              
              {/* Funkollector */}
              <a 
                href="https://react-funkollector-front-end.vercel.app/" 
                target="_blank" 
                rel="noreferrer" 
                className="project-card"
              >
                <h3>Funkollector</h3>
                <p>A collector-friendly React app for managing Funko Pop collections and wishlists.</p>
                <p className="meta">React · Node.js · MongoDB</p>
                <div className="project-links">
                  <span className="btn ghost small">Live Demo</span>
                  <span className="btn primary small">GitHub</span>
                </div>
              </a>

              {/* PHL */}
              <a 
                href="https://peninsula-hoopers-league-6dc6db12264c.herokuapp.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="project-card"
              >
                <h3>Peninsula Hoopers League</h3>
                <p>A full CRUD basketball league app with teams, players, and division management.</p>
                <p className="meta">Node.js · Express · MongoDB · EJS</p>
                <div className="project-links">
                  <span className="btn ghost small">Live Demo</span>
                  <span className="btn primary small">GitHub</span>
                </div>
              </a>

              {/* Samarize */}
              <a 
                href="https://sam-arize-3103ffa01ce3.herokuapp.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="project-card"
              >
                <h3>Samarize</h3>
                <p>A role-based inventory & asset manager built with Django and PostgreSQL.</p>
                <p className="meta">Django · Python · PostgreSQL</p>
                <div className="project-links">
                  <span className="btn ghost small">Live Demo</span>
                  <span className="btn primary small">GitHub</span>
                </div>
              </a>

            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-inner">
            <h2>Experience</h2>

            <div className="experience-list">
              <article className="experience-item">
                <h3>Software Engineering Immersive</h3>
                <p className="meta">General Assembly · Jan 2025 – Aug 2025 · San Francisco (Remote/Hybrid)</p>
                <ul>
                  <li>Completed 500+ hours of full-stack web development training with daily standups, Agile workflow, and pair programming.</li>
                  <li>Built and deployed multiple projects using React, Node.js, Express, MongoDB, Django, and REST APIs.</li>
                  <li>Strengthened skills in debugging, version control (Git/GitHub), and building UI components from scratch.</li>
                </ul>
              </article>

              <article className="experience-item">
                <h3>Senior Autonomous Vehicle Operator</h3>
                <p className="meta">Transdev / Waymo · Dec 2020 – Dec 2024 · San Francisco Bay Area</p>
                <ul>
                  <li>Executed high-precision driving operations to support autonomous vehicle testing in complex, real-world environments.</li>
                  <li>Logged and reported system behaviors to engineering teams, contributing to improvements in AV performance and safety.</li>
                  <li>Demonstrated strong problem-solving, attention to detail, and reliable teamwork in a technical, safety-critical setting.</li>
                </ul>
              </article>
            </div>

            <div className="experience-education">
              <h2>Education</h2>
              <ul>
                <li>
                  <strong>Software Engineering Immersive</strong> — General Assembly (2025)<br />
                  Full-Stack Web Development Certificate
                </li>
                <li>
                  <strong>Westmoor High School</strong> — Daly City, CA (2012 – 2015)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-inner">
            <h2>Contact</h2>
            <p>We&apos;ll add real links and a nicer layout next.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Marco Agapito</small>
      </footer>
    </div>
  )
}

export default App