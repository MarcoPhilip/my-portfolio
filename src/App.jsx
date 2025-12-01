// src/App.jsx
import './App.css'
import profilePic from './assets/self.jpeg'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Marco Agapito</div>
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
                    <p className="hero-eyebrow">Software Engineer</p>
                    <h1>Hi, I&apos;m Marco.</h1>
                    <p className="hero-tagline">
                      I build clean, user-focused web apps — from collectibles dashboards to league
                      management tools.
                    </p>
                    <div className="hero-actions">
                      <a href="#projects" className="btn primary">View Projects</a>
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
            <h2>About</h2>
            <p>
              I&apos;m a software engineer with a background in autonomous vehicle operations
              and customer-facing roles. I recently completed a software engineering immersive and
              now focus on building full-stack JavaScript apps.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-inner">
            <h2>Skills</h2>
            <ul>
              <li>JavaScript, TypeScript, Python, SQL</li>
              <li>React, Vite, HTML, CSS</li>
              <li>Node.js, Express, MongoDB, Git, GitHub</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-inner">
            <h2>Projects</h2>
            <ul>
              <li>Funkollector – React app for tracking Funko Pop collections.</li>
              <li>Peninsula Hoopers League – Full-stack CRUD basketball league manager.</li>
              <li>Samarize / Travel Destinations – Django app for trips and activities.</li>
            </ul>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-inner">
            <h2>Experience</h2>
            <p>We&apos;ll flesh this out later.</p>
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