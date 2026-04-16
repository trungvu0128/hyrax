import React from 'react';
import { FaFire, FaLock, FaChartPie, FaPercent } from 'react-icons/fa';

const Tokenomics = () => {
  const stats = [
    { icon: <FaChartPie />, label: 'Total Supply', value: '1,000,000,000' },
    { icon: <FaPercent />, label: 'Tax', value: '0/0' },
    { icon: <FaFire />, label: 'Liquidity', value: '100% BURNED' },
    { icon: <FaLock />, label: 'Mint', value: 'REVOKED' },
  ];

  return (
    <section id="tokenomics" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
      <div className="halftone" style={{ opacity: 0.2 }}></div>
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--primary)', WebkitTextStroke: '2px var(--white)' }}>
          Hyraxnomics
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {stats.map((stat, idx) => (
            <div key={idx} className="card-nb" style={{ 
              background: 'transparent', 
              borderColor: 'var(--white)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'var(--white)'
            }}>
              <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '15px' }}>
                {stat.icon}
              </div>
              <h3 className="font-heading" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{stat.label}</h3>
              <p style={{ fontSize: '2rem', fontWeight: 900 }}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="card-nb" style={{ 
          background: 'var(--primary)', 
          color: 'var(--ink)',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h3 className="font-heading" style={{ fontSize: '2rem', marginBottom: '15px' }}>The "Do Nothing" Protocol</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>
            While other tokens promise moon missions, AI-integration, and metaverse gaming, $HYRAX promises absolutely nothing. 
            The dev is likely sleeping. The community is vibing. The hyrax is just breathing. 
            Pure, unadulterated memetic vacuum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
