import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">🤖</span>
          <span className="logo-text">LEGO Robotics Team</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/robotics" 
              className={location.pathname === '/robotics' ? 'nav-link active' : 'nav-link'}
            >
              Robotics
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;