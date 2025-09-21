import React, { useState } from "react";
import "./Navbar.css";
import hvImg from "../assets/hv.jpeg"; // import gambar

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">
        <img src={hvImg} alt="hv" className="logo-img" />
        KET ON SUI
      </h1>

      {/* Tombol Hamburger (muncul hanya di mobile via CSS) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Links */}
      <div className={`links ${isOpen ? "open" : ""}`}>
        <a href="#about">About</a>
        <a href="#tokenomics">Tokenomics</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#gallery">Gallery</a>
        <a href="#community">Community</a>
      </div>
    </nav>
  );
};

export default Navbar;
