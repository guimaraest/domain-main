import { Github } from 'iconoir-react'

const thingsIveLearned = [
  'some c',
  'python',
  'numpy and linear algebra',
  'github actions and docker',
  'js, html and css',
  'some typescript',
  'liquid and eleventy',
  'some very basic django and react',
  'linux usage and ricing',
  'homelabbing, nextcloud & cloudflare',
]

function App() {
  return (
    <main className="page">
      <article className="intro-card">
        <div className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          <span>a little about me</span>
        </div>

        <header className="intro">
          <h1>hello, i'm thiago guimarães</h1>
          <p>i've been coding as a hobby since 2021.</p>
        </header>

        <div className="divider" aria-hidden="true">
          <span />
        </div>

        <section className="learning" aria-labelledby="learning-title">
          <h2 id="learning-title">some things i've learnt along the way:</h2>
          <ul className="skills">
            {thingsIveLearned.map((thing) => (
              <li key={thing}>{thing}</li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <a
            className="github-link"
            href="https://github.com/guimaraest"
            target="_blank"
            rel="noreferrer"
          >
            <Github width={20} height={20} strokeWidth={1.8} aria-hidden="true" />
            <span>github.com/guimaraest</span>
            <span className="external-arrow" aria-hidden="true">↗</span>
          </a>
          <span className="footer-note">find me around the internet</span>
        </footer>
      </article>
      <span className="page-index" aria-hidden="true">01 — 01</span>
    </main>
  )
}

export default App
