import React, { useState } from 'react';
import { FaTwitter, FaTiktok } from 'react-icons/fa';

const Hero = ({ cau }) => {
  const [boops, setBoops] = useState(0);
  const [showBubble, setShowBubble] = useState(false);

  const playBoop = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(440 + boops * 10, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  };

  const handleBoop = () => {
    setBoops(prev => prev + 1);
    setShowBubble(true);
    playBoop();
    setTimeout(() => setShowBubble(false), 1000);
  };

  const title = "What does he even do?";
  const words = title.split(" ");

  return (
    <section id="hero" className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="halftone"></div>
      
      {/* Background Banner Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("https://cdn.dexscreener.com/cms/images/Q6qW5tu3AlhLTJMy?width=1500&height=500&quality=95&format=auto")',
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundAttachment: 'fixed',
         opacity: 0.15,
         filter: 'grayscale(1) contrast(1.2)',
         zIndex: 0,
         pointerEvents: 'none'
       }}></div>
      
      {/* Background Ghost Text */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '15vw',
        opacity: 0.05,
        fontWeight: 900,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        zIndex: 1,
        color: 'transparent',
        WebkitTextStroke: '2px var(--ink)',
        fontFamily: 'Luckiest Guy'
      }}>
        WHAT DOES HE EVEN DO?
      </div>

      <div className="container hero-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
          
          {/* Left Side: Text */}
          <div className="hero-text-side">
            <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', marginBottom: '24px' }}>
              {words.map((word, wIdx) => (
                <span key={wIdx} style={{ display: 'inline-block', marginRight: '15px' }}>
                  {word.split("").map((letter, lIdx) => (
                    <span 
                      key={lIdx} 
                      className="chaotic-letter"
                      style={{ 
                        display: 'inline-block',
                        transition: 'var(--transition)',
                        cursor: 'default'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            
            <p style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '40px', maxWidth: '500px' }}>
              Seriously, look at him. He's just... there. Doing nothing. 
              The ultimate utility is zero utility. $HYRAX is the spirit animal of the bull market.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href={`https://pump.fun/${cau}`} target="_blank" rel="noopener noreferrer" className="btn-nb">
                GET $HYRAX
              </a>
              <a href={`https://dexscreener.com/solana/${cau}`} target="_blank" rel="noopener noreferrer" className="btn-nb btn-white">
                VIEW CHART
              </a>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <a 
                  href="https://x.com/Hyrax_sol" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-nb"
                  style={{ padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <FaTwitter size={24} />
                </a>
                <a 
                  href="https://www.tiktok.com/search?q=hyrax&t=1776364718778" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-nb"
                  style={{ padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Mascot */}
          <div className="hero-image-side" style={{ position: 'relative', margin: '0 auto' }}>
            <div 
              className="mascot-frame card-nb"
              onClick={handleBoop}
              style={{
                borderRadius: '50%',
                overflow: 'hidden',
                width: 'min(500px, 80vw)',
                height: 'min(500px, 80vw)',
                padding: '0',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <img 
                src="https://cdn.dexscreener.com/cms/images/rS2i99qcVAV6vkQV?width=800&height=800&quality=95&format=auto" 
                alt="Hyrax"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.1s ease'
                }}
                className="mascot-img"
              />
              
              {showBubble && (
                <div style={{
                  position: 'absolute',
                  top: '20%',
                  right: '-20px',
                  background: 'var(--white)',
                  border: '4px solid var(--ink)',
                  padding: '10px 20px',
                  boxShadow: '6px 6px 0px var(--ink)',
                  zIndex: 10,
                  transform: 'rotate(10deg)',
                  animation: 'popIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                  <span className="font-heading" style={{ fontSize: '2rem' }}>BOOP!! ×{boops} 🐾</span>
                </div>
              )}
            </div>

            {/* Manga Stamp Badge */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '-30px',
              width: '120px',
              height: '120px',
              background: 'var(--primary)',
              border: '4px solid var(--ink)',
              borderRadius: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'rotate(-15deg)',
              boxShadow: '8px 8px 0px var(--ink)',
              zIndex: 5
            }}>
              <span className="font-heading" style={{ fontSize: '1rem' }}>PUMP</span>
              <span className="font-heading" style={{ fontSize: '1.2rem' }}>FUN</span>
              <span className="font-heading" style={{ fontSize: '0.8rem' }}>2025</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .chaotic-letter:hover {
          transform: scale(1.5) rotate(15deg);
          color: var(--primary);
          -webkit-text-stroke: 2px var(--ink);
        }
        .mascot-frame:active img {
          transform: scale(0.95);
        }
        @keyframes popIn {
          from { transform: scale(0) rotate(-10deg); opacity: 0; }
          to { transform: scale(1) rotate(10deg); opacity: 1; }
        }
        @media (max-width: 1024px) {
          .hero-content > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-text-side { order: 2; }
          .hero-image-side { order: 1; margin: 0 auto; }
          .hero-text-side h1 { fontSize: 3.5rem !important; }
          .hero-image-side .mascot-frame { width: 300px !important; height: 300px !important; }
          .hero-text-side div { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
