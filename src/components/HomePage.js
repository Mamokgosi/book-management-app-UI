import React from 'react';

function HomePage() {
  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#fff', 
    textAlign: 'center',
  };

  const textStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#fff', 
    textAlign: 'center',
  };

  const containerStyle = {
    backgroundColor: '#ADD8E6',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',  
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
    <h1 style={{ ...titleStyle, fontSize: '3rem' }}>Explore Your Bookshelf</h1>
    <p style={{ ...textStyle, fontSize: '1.4rem' }}>Welcome to our digital book haven. Dive into a world of literary adventure, where every page holds a new journey.</p>
  </div>
  
  );
}

export default HomePage;
