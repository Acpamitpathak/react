import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Body style={{ flex: 1 }} />
      <Footer />
    </div>
  );
};

export default App;
