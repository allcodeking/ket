import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MemeGallery from "./components/MemeGallery";
import "./App.css";
import "./components/Navbar.css";
import "./components/MemeGallery.css";

import logo from "./assets/k.png"; // logo utama
import Mountains from "./assets/mountain.svg"; // background gunung

const contractAddress = "0x3aa9200051cb6e45eed1724d60c5279c5b8d8efd625086326138e8eb989b8380::ket::KET";

const App: React.FC = () => {
  const [toast, setToast] = useState(""); // toast notif
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // mobile check

  // update state saat resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // hilangkan toast otomatis setelah 2 detik
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress)
      .then(() => setToast("Copied!"))
      .catch(() => setToast("Failed to copy!"));
  };

  // fungsi shorten untuk mobile
  const shortenAddress = (address: string) => {
    if (!isMobile) return address; // Desktop: tampil full
    const first8 = address.slice(0, 8);
    const last8 = address.slice(-8);
    return `${first8}....${last8}`;
  };


  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="hero hero-section">
        <img src={logo} alt="KET Logo" className="lg" />
        <h1>Not a frog. Not a dog. The era of the cat begins.</h1>

        {/* Contract Box */}
        <div className="contract-box">
          <span className="contract-address">{shortenAddress(contractAddress)}</span>
          <button onClick={handleCopy}>Copy</button>
        </div>

        {/* Toast Notification */}
        {toast && <div className="toast-notif">{toast}</div>}

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <a href="https://blast.fun/token/0x3aa9200051cb6e45eed1724d60c5279c5b8d8efd625086326138e8eb989b8380::ket::KET" target="_blank" rel="noreferrer">
            <button>Buy on Blast.fun</button>
          </a>
          <a href="https://blast.fun/token/0x3aa9200051cb6e45eed1724d60c5279c5b8d8efd625086326138e8eb989b8380::ket::KET" target="_blank" rel="noreferrer">
            <button>View Chart</button>
          </a>
          <a href="https://t.me/ketonsui" target="_blank" rel="noreferrer">
            <button>Join the Cult</button>
          </a>
        </div>
      </header>

      {/* About */}
      <section id="about" className="about-section">
        <h2>About KET</h2>
        <p>
          KET is a cat. That’s it. A cat on-chain. Inspired by Pepe, tired of
          dogs, KET was born to sit on your keyboard while you trade and ruin
          your portfolio. No promises, no utilities, just pure meme chaos.
        </p>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="tokenomics-section">
        <h2>Tokenomics</h2>
        <p>Supply: 1,000,000,000 KET</p>
        <p>Taxes: 0% (cats don’t do accounting)</p>
        <p>Liquidity: Locked 🔒</p>
        <p>Fair Launch: Everyone suffers equally</p>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="roadmap-section">
        <h2>Roadmap</h2>
        <p>Phase 1 – Meow: Launch on Blast.fun, first 100 cult members, meme starter pack</p>
        <p>Phase 2 – Scratch: Meme invasion on Crypto Twitter, community contests, appear in your dreams</p>
        <p>Phase 3 – Purr: 10,000 holders, KET merch, Cats &gt; Frogs &gt; Dogs</p>
        <p>Phase 4 – Domination: Take over crypto culture, take over your couch, To the moon</p>
      </section>

      {/* Meme Gallery */}
      <section id="gallery" className="gallery-section">
        <h2>Meme Gallery</h2>
        <MemeGallery />
      </section>

      {/* Community */}
      <section id="community" className="community-section">
        <h2>Join the Cult</h2>
        <p>Become part of the chaos! Follow us and join our meme-powered cat cult:</p>
        <div className="community-buttons">
          <a href="https://t.me/ketonsui" target="_blank" rel="noreferrer">
            <button>Telegram</button>
          </a>
          <a href="https://twitter.com/ketonsui" target="_blank" rel="noreferrer">
            <button>Twitter</button>
          </a>
        </div>
      </section>

      {/* Gunung di atas Footer */}
      <div className="mountain-bg">
        <img src={Mountains} alt="Gunung" />
      </div>

      {/* Footer */}
      <footer className="footer-section">
        <p>© 2025 KET. Powered by memes, fueled by chaos.</p>
        <p>Cats don’t follow roadmaps. They knock them off the table.</p>
      </footer>
    </div>
  );
};

export default App;
