import React from 'react';
import LeftPage from './LeftPage';
import RightPage from './RightPage';

const Body: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 100px)', overflow: 'hidden' }}>
      <div style={{ flex: '0 0 40%', background: '#f0f0f0' }}>
        <LeftPage />
      </div>
      <div style={{ flex: '0 0 60%', background: '#ffffff' }}>
        <RightPage />
      </div>
    </div>
  );
};

export default Body;
