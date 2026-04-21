import React from 'react';

const WatercolorBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: '#fcfef2',
        backgroundImage: `
          radial-gradient(circle at 10% 10%, rgba(255, 255, 204, 0.8) 0%, transparent 60%),
          radial-gradient(circle at 90% 90%, rgba(204, 255, 255, 0.8) 0%, transparent 60%),
          radial-gradient(circle at 50% 50%, rgba(204, 255, 220, 0.7) 0%, transparent 60%),
          radial-gradient(circle at 10% 90%, rgba(255, 240, 240, 0.7) 0%, transparent 60%),
          radial-gradient(circle at 90% 10%, rgba(240, 240, 255, 0.7) 0%, transparent 60%)
        `,
        filter: 'blur(30px)',
      }}
    />
  );
};

export default WatercolorBackground;
