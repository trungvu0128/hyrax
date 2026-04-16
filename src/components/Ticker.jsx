import React from 'react';

const Ticker = () => {
  const text = "$HYRAX DOES NOTHING • NO UTILITY • NO ROADMAP • JUST VIBES • ";
  const repeatedText = new Array(10).fill(text).join("");

  return (
    <div style={{
      background: 'var(--ink)',
      color: 'var(--white)',
      padding: '15px 0',
      borderTop: '4px solid var(--ink)',
      borderBottom: '4px solid var(--ink)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="ticker-scroll" style={{
        display: 'inline-block',
        animation: 'ticker 20s linear infinite',
        fontSize: '1.5rem',
        fontWeight: 900,
        fontFamily: 'Luckiest Guy'
      }}>
        {repeatedText}
      </div>
      <div className="ticker-scroll" style={{
        display: 'inline-block',
        animation: 'ticker 20s linear infinite',
        fontSize: '1.5rem',
        fontWeight: 900,
        fontFamily: 'Luckiest Guy'
      }}>
        {repeatedText}
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-scroll {
          padding-right: 50px;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
