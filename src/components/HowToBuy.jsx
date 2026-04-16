import React from 'react';

const HowToBuy = ({ cau }) => {
  const steps = [
    {
      num: '01',
      title: 'Get a Wallet',
      text: 'Download Phantom or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to phantom.app.'
    },
    {
      num: '02',
      title: 'Get Some SOL',
      text: 'Have SOL in your wallet to switch to $HYRAX. If you don’t have any SOL, you can buy directly on phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.'
    },
    {
      num: '03',
      title: 'Go to Pump.fun',
      text: 'Connect to Pump.fun. Go to pump.fun in google chrome or on the browser inside your Phantom app. Connect your wallet. Paste the $HYRAX token address into Pump.fun, select $HYRAX, and confirm.'
    },
    {
      num: '04',
      title: 'Switch SOL for $HYRAX',
      text: 'Switch SOL for $HYRAX. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.'
    }
  ];

  return (
    <section id="how-to-buy" style={{ background: 'var(--primary)' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--white)', WebkitTextStroke: '2px var(--ink)' }}>
          How to Buy
        </h2>

        <div className="htb-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {steps.map((step, idx) => (
            <div key={idx} className="htb-card card-nb" style={{ position: 'relative', overflow: 'hidden' }}>
              <div 
                className="htb-step-num font-heading" 
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-10px',
                  fontSize: '8rem',
                  color: 'transparent',
                  WebkitTextStroke: '2px var(--ink)',
                  opacity: 0.2,
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}
              >
                {step.num}
              </div>
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 className="font-heading" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.5 }}>
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a 
            href={`https://pump.fun/${cau}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-nb btn-white"
            style={{ width: '100%', maxWidth: '400px' }}
          >
            BUY ON PUMP.FUN NOW!
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .htb-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowToBuy;
