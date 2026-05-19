import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { Music, CalendarDays, Mail, PlayCircle, Flame } from "lucide-react";
import './styles.css';

function Button({ children, href, variant = 'solid' }) {
  const className = variant === 'outline' ? 'btn btn-outline' : 'btn btn-solid';
  return href ? <a className={className} href={href}>{children}</a> : <button className={className}>{children}</button>;
}

function App() {
  const originals = [
    ["Better Off Without Me", "/audio/originals/Better Off Without Me.mp3"],
    ["Beyond the Veil", "/audio/originals/Beyond the Veil.mp3"],
    ["Persecuted", "/audio/originals/Persecuted.mp3"],
    ["Mean Green Machine", "/audio/originals/Mean Green Machine.mp3"],
    ["Walking Into the Son", "/audio/originals/Walking Into the Son.mp3"],
    ["Worth The Load", "/audio/originals/Worth The Load.mp3"]
  ];

  const workingOn = [
    ["Weak", "/audio/working-on/Weak.mp3"],
    ["Overflow", "/audio/working-on/Overflow.mp3"],
  ];

  return (
    <div className="site">
      <div className="bg-glow" />
      <div className="bg-streak" />

      <header className="header">
        <a className="brand" href="#top" aria-label="Scraping Penny home">
          <span className="brand-icon"><Flame size={22} /></span>
          <span>
            <span className="brand-title">SCRAPING PENNY</span>
            <span className="brand-subtitle">Official Band Site</span>
          </span>
        </a>

        <nav className="nav">
          <a href="#music">Music</a>
          <a href="#working-on">In Progress</a>
          <a href="#shows">Shows</a>
          <a href="#live-snippets">Live</a>
          <a href="#media">Media</a>
          <a href="#contact">Booking</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="hero-copy">
            <p className="eyebrow">2026 Official Launch</p>
            <h1>90's & 00's Hard Rock Forged In Fire</h1>
            <p className="lead">
              Scraping Penny is an Atlanta-based heavy metal  / hard rock band performing original and cover music
              showcasing influences of the 1990's-2000'sh reflecting and leveraging their relationships that helped shape 
              their own original style.  With grinding riffs, thunderous rhythm, and high-voltage stage presence, \
              Scraping Penny delivers the fire.... Let the Sparks Fly
            </p>

            <div className="actions">
              <Button href="#music"><PlayCircle size={20} /> Listen Now</Button>
              <Button href="#shows" variant="outline">View Shows</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="hero-image-wrap">
            <div className="hero-image-glow" />
            <img src="/scraping-penny-official-band-picture-2026.jpeg" alt="Scraping Penny official 2026 band picture" className="hero-image" />
            <div className="spark-layer">
              <span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
          </motion.div>
        </section>

        <section id="music" className="section">
          <p className="eyebrow">Original Music</p>
          <h2>Scraping Penny Originals</h2>

          <div className="cards two">
            {originals.map(([title, src]) => (
              <article className="card" key={title}>
                <Music className="card-icon" size={34} />
                <h3>{title}</h3>
                <audio controls className="audio-player">
                  <source src={src} type="audio/mpeg" />
                </audio>
              </article>
            ))}
          </div>
        </section>

        <section id="working-on" className="section">
          <p className="eyebrow">In Progress</p>
          <h2>Songs We're Working On....</h2>

          <div className="cards two">
            {workingOn.map(([title, src]) => (
              <article className="card" key={title}>
                <Music className="card-icon" size={34} />
                <h3>{title}</h3>
                <p>
                  Draft original material currently being developed by Scraping Penny. These songs were written by
                  Kayla James, daughter of Scraping Penny lead singer Stephen James. Kayla is a brilliant
                  singer, songwriter, and musician in her own right — stay tuned, because you will be hearing
                  more from her and her fiancé, Casey Lynn Todd.
                </p>
                <audio controls className="audio-player">
                  <source src={src} type="audio/mpeg" />
                </audio>
              </article>
            ))}
          </div>
        </section>

               <section id="live-snippets" className="section">
          <p className="eyebrow">Live In Atlanta</p>
          <h2>Sound Snippets</h2>

          <div className="cards two">
            <article className="card">
              <h3>Live at La Estacion — Cinco de Mayo 2026</h3>
              <p>Raw live band bar recording from a recent Scraping Penny performance in Southwest Atlanta.</p>
              <audio controls className="audio-player">
                <source src="/audio/live/la-estacion-live-snippet.mp3" type="audio/mpeg" />
              </audio>
            </article>

            <article className="card">
              <h3>More Atlanta Live Snippets Coming Soon</h3>
              <p>Additional live cover-band performances and promo clips from Atlanta-area venues will be added here.</p>
            </article>
          </div>
        </section>
 <section id="shows" className="section">
          <p className="eyebrow">Tour</p>
          <h2>Upcoming Shows</h2>
          <div className="show-list">
            <div className="show-row">
              <span><CalendarDays size={20} /> Show Dates Coming Soon</span>
              <Button variant="outline">Tickets Soon</Button>
            </div>
          </div>
        </section>
        <section id="media" className="section">
          <p className="eyebrow">Media</p>
          <h2> Bio's Photos & Video</h2>

          <div className="cards two">
            <article className="card media-card">
              <img src="/scraping-penny-official-band-picture-2026.jpeg" alt="Scraping Penny official band image" />
              <h3>Official 2026 Band Picture</h3>
              <p>The official 2026 Scraping Penny promotional image.</p>
            </article>

            <article className="card">
              <h3>Band Bio's</h3>
              <p>coming soon.</p>
              <h3>Videos & Promo Reels</h3>
              <p>Live YouTube videos and promo clips coming soon.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-box">
          <p className="eyebrow">Booking & Contact</p>
          <h2>Bring Scraping Penny To The Stage</h2>
          <p>
            For booking, venue inquiries, and collaborations, contact Stephen James directly at 404,307.6038 or{" "}
            <a href="mailto:sjames.atlanta@gmail.com">sjames.atlanta@gmail.com</a>
          </p>

          <div className="actions">
            <Button href="mailto:sjames.atlanta@gmail.com"><Mail size={20} /> Email Booking</Button>
            <Button variant="outline">EPK Coming Soon</Button>
          </div>
        </section>
      </main>

      <footer>© 2026 Scraping Penny — scrapingpenny.com</footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
