import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home: React.FC = () => {
  return (
    <div className="App">
      <div className="calculator-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Flowerplot</h1>
        <Link to="/calculator" className="button" style={{ textDecoration: 'none', padding: '1rem 2rem', fontSize: '1.2rem' }}>
          Go to Calculator
        </Link>
      </div>
    </div>
  );
};

export default Home; 