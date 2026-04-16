import React from 'react';
import { FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = ({ cau }) => {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--white)', padding: '60px 20px', borderTop: '4px solid var(--white)' }}>
      <div className="container">
        <div className="footer-content" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '30px'
        }}>
          
          <div className="footer-brand">
            <h2 className="font-heading" style={{ fontSize: '3rem', color: 'var(--primary)', margin: 0 }}>$HYRAX</h2>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, opacity: 0.8 }}>What does he even do?</p>
          </div>

          <div className="footer-links" style={{ display: 'flex', gap: '20px' }}>
            <a 
              href={`https://pump.fun/${cau}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-nb btn-white"
              style={{ padding: '10px 20px', fontSize: '1.2rem' }}
            >
              PUMP.FUN
            </a>
            <a 
              href={`https://dexscreener.com/solana/${cau}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-nb btn-white"
              style={{ padding: '10px 20px', fontSize: '1.2rem' }}
            >
              DEXSCREENER
            </a>
          </div>
          
          <div className="footer-socials" style={{ display: 'flex', gap: '20px', fontSize: '2rem' }}>
            <a href="https://x.com/Hyrax_sol" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
              <FaTwitter />
            </a>
            <a href="https://www.tiktok.com/search?q=hyrax&t=1776364718778" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
              <FaTiktok />
            </a>
          </div>

        </div>

        <div style={{ 
          marginTop: '60px', 
          paddingTop: '30px', 
          borderTop: '2px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '20px',
          opacity: 0.6
        }} className="footer-bottom">
          <p>CA: {cau}</p>
          <p>© 2025 $HYRAX. He literally does nothing.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column !important;
            text-align: center !important;
          }
          .footer-links {
            flex-direction: column !important;
            width: 100% !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
