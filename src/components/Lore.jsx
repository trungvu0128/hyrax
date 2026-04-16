import React from 'react';

const Lore = ({ cau }) => {
  const chapters = [
    { emoji: '👑', title: 'The Silent King', text: 'He does not bark, meow, or tweet. He just observes.' },
    { emoji: '🧘', title: 'Zen Master', text: 'While the market crashes, the hyrax remains unbothered.' },
    { emoji: '⛰️', title: 'Rock Dweller', text: 'Built to withstand extreme pressure and bear markets.' },
    { emoji: '🚀', title: 'Zero Effort', text: 'No utility means infinite potential.' },
  ];

  return (
    <section id="lore" className="lore-section" style={{ background: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
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
        opacity: 0.1,
        filter: 'grayscale(1) contrast(1.2)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      {/* Ghost Background Text */}
      <div className="lore-bg-text font-heading" style={{
        position: 'absolute',
        top: '20%',
        left: '-5%',
        fontSize: '14vw',
        opacity: 0.05,
        color: 'transparent',
        WebkitTextStroke: '2px var(--ink)',
        pointerEvents: 'none',
        zIndex: 1,
        transform: 'rotate(-5deg)'
      }}>
        ORIGINS
      </div>

      <div className="container">
        <h2 className="section-title lore-header" style={{ position: 'relative', zIndex: 2 }}>
          The Legend
        </h2>

        <div className="lore-content-split" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '50px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          
          {/* Left Side: Mascot Image */}
          <div className="lore-image-side" style={{ margin: '0 auto', maxWidth: '500px', width: '100%' }}>
            <img 
              src="https://cdn.dexscreener.com/cms/images/rS2i99qcVAV6vkQV?width=800&height=800&quality=95&format=auto" 
              alt="Hyrax Lore" 
              className="lore-manga-img card-nb"
              style={{
                width: '100%',
                aspectRatio: '1',
                objectFit: 'cover',
                filter: 'grayscale(1) contrast(1.1)',
                transform: 'rotate(-1.5deg)',
                padding: 0
              }}
            />
          </div>

          {/* Right Side: Lore Points */}
          <div className="lore-text-side">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {chapters.map((chapter, index) => (
                <div 
                  key={index} 
                  className="lore-point card-nb" 
                  style={{ 
                    background: 'var(--white)',
                    animation: `float ${3 + index}s ease-in-out infinite alternate`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="lore-point-header" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                    <span className="lore-point-emoji" style={{ fontSize: '2rem' }}>{chapter.emoji}</span>
                    <h3 className="lore-point-title font-heading" style={{ fontSize: '1.5rem', margin: 0 }}>{chapter.title}</h3>
                  </div>
                  <p className="lore-point-text" style={{ fontSize: '1.1rem', fontWeight: 500, margin: 0 }}>
                    {chapter.text}
                  </p>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <a href={`https://pump.fun/${cau}`} target="_blank" rel="noopener noreferrer" className="btn-nb lore-cta-mini">
                🚀 JOIN THE VIBE
              </a>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>
    </section>
  );
};

export default Lore;
