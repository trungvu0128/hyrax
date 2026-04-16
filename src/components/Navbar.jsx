import React, { useState } from 'react';
import { FaBars, FaTimes, FaTiktok, FaTwitter } from 'react-icons/fa';

const Navbar = ({ cau }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="nav-logo font-heading">
          $HYRAX
        </a>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMenu}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer',
            color: 'var(--ink)'
          }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={() => setIsOpen(false)}>Wait, what?</a>
          <a href="#tokenomics" onClick={() => setIsOpen(false)}>Stats</a>
          <a href="#lore" onClick={() => setIsOpen(false)}>Origins</a>
          <a href="#how-to-buy" onClick={() => setIsOpen(false)}>Get Some</a>
          <a href="#pfp-gen" onClick={() => setIsOpen(false)}>PFP Maker</a>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://x.com/Hyrax_sol" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'var(--ink)' }}>
              <FaTwitter />
            </a>
            <a href="https://www.tiktok.com/search?q=hyrax&t=1776364718778" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'var(--ink)' }}>
              <FaTiktok />
            </a>
          </div>
          <a 
            href={`https://pump.fun/${cau}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-nb"
          >
            BUY NOW
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .mobile-toggle {
            display: block !important;
          }
          .nav-links {
            position: fixed;
            top: 84px;
            left: 0;
            width: 100%;
            height: calc(100vh - 84px);
            background: var(--paper);
            flex-direction: column;
            padding: 40px 20px;
            gap: 20px;
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border-top: 4px solid var(--ink);
            z-index: 1000;
          }
          .nav-links.open {
            transform: translateX(0);
          }
          .nav-links a {
            font-size: 1.5rem;
          }
          .nav-links div {
            margin: 10px 0;
          }
          .nav-links .btn-nb {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
