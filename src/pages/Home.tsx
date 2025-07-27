import React from 'react';
import './Pages.css';

const Home: React.FC = () => {
  return (
    <div className="page">
      <div className="hero-section">
        <h1>Welcome to Our LEGO Robotics Team</h1>
        <p className="hero-text">
          Building the future, one brick at a time! We are a passionate team of young engineers
          and programmers who love creating innovative robots with LEGO components.
        </p>
        <div className="hero-image">
          🤖🧱
        </div>
      </div>
      
      <div className="features-section">
        <h2>What We Do</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Design & Build</h3>
            <p>We design and construct robots using LEGO Mindstorms and custom components.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Programming</h3>
            <p>We program our robots using various languages and platforms to bring them to life.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Compete</h3>
            <p>We participate in robotics competitions and showcase our innovative solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;