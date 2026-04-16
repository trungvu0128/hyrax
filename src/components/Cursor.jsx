import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="custom-cursor"
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
        fontSize: isPointer ? '48px' : '32px',
        transition: 'font-size 0.15s ease-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{ marginRight: '-12px', zIndex: 2 }}>🖊️</span>
      <span 
        style={{ 
          fontSize: isPointer ? '32px' : '24px',
          transition: 'all 0.2s ease-out',
          transform: `translateX(${isPointer ? '10px' : '0px'}) rotate(${isPointer ? '20deg' : '0deg'})`,
          opacity: 0.8
        }}
      >
        🦦
      </span>

      <style>{`
        @media (hover: none) and (pointer: coarse) {
          .custom-cursor {
            display: none !important;
          }
          body {
            cursor: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Cursor;
