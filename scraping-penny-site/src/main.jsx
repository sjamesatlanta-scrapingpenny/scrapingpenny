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
          <a href="#shows">Shows</a>
          <a href="#media">Media</a>
          <a href="#contact">Booking</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="hero-copy">
            <p className="eyebrow">2026 Official Launch</p>
            <h1>90s Hard Rock Forged in Fire</h1>
            <p className="lead">Scraping Penny is a 90s hard rock band with a dark, molten-metal visual style, grinding riffs, thunderous rhythm, and a high-voltage stage presence.</p>
            <div className="actions">
              <Button href="#music"><PlayCircle size={20} /> Listen Soon</Button>
              <Button href="#shows" variant="outline">View Shows</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="hero-image-wrap">
            <div className="hero-image-glow" />
            <img src="/scraping-penny-official-band-picture-2026.jpeg" "Scraping Penny official 2026 band picture" className="hero-image" />
          </motion.div>
        </section>

        <section id="music" className="section">
          <p className="eyebrow">Music</p>
          <h2>Latest Releases</h2>
          <div className="cards thre
            {['Music Coming Soon', 'Streaming Links Coming Soon', 'Video Coming Soon'].map((title) => (
              <article className="card" key={title}>
                <Music className="card-icon" size={34} />
                <h3>{title}</h3>
                <p>Spotify, Apple Music, YouTube, Bandcamp, and other official music links will be added here soon.</p>
              </article>
            ))}
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
          <h2>Photos & Video</h2>
          <div className="cards two">
            <article className="card media-card">
              <img src="/scraping-penny-official-band-picture-2026.jpeg" alt="Scraping Penny official 2026 band picture" />
              <h3>Official 2026 Band Picture</h3>
              <p>The official 2026 Scraping Penny band image is the primary website hero and press image.</p>
            </article>
            <article className="card">
              <h3>Video / Promo Reel</h3>
              <p>Embed YouTube, live clips, rehearsal footage, or a teaser trailer here when available.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-box">
          <p className="eyebrow">Booking & Contact</p>
          <h2>Bring Scraping Penny to the Stage</h2>
          <p>For booking, press, venue inquiries, and collaborations, contact the band directly at <a href="mailto:sjames.atlanta@gmail.com">sjames.atlanta@gmail.com</a>.</p>
          <div className="actions">
            <Button href="mailto:sjames.atlanta@gmail.com"><Mail size={20} /> Email Booking</Button>
            <Button variant="outline">EPK Coming Soon</Button>
          </div>
          <div className="socials" aria-label="Social links coming soon">
            <span className="text-sm uppercase tracking-[0.3em] text-zinc-500">Social Links Coming Soon</span>
          </div>
        </section>
      </main>

      <footer>© 2026 Scraping Penny. All rights reserved. scrapingpenny.com</footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
