import React from 'react';
import './Pages.css';

const Robotics: React.FC = () => {
  return (
    <div className="page">
      <div className="content-section">
        <h1>Our Robotics Projects</h1>
        <p className="intro-text">
          Explore our latest robotics projects and innovations using LEGO Mindstorms and 
          custom engineering solutions.
        </p>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon">🚗</div>
            <h3>Autonomous Vehicle</h3>
            <p>
              A self-driving LEGO car that uses sensors to navigate obstacles and follow 
              predetermined paths. Features ultrasonic sensors and color detection.
            </p>
            <div className="project-tech">
              <span className="tech-tag">EV3</span>
              <span className="tech-tag">Ultrasonic Sensor</span>
              <span className="tech-tag">Python</span>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-icon">🦾</div>
            <h3>Robotic Arm</h3>
            <p>
              A precision robotic arm capable of picking up and placing objects with accuracy. 
              Controlled through custom software with multiple degrees of freedom.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Mindstorms</span>
              <span className="tech-tag">Motors</span>
              <span className="tech-tag">Scratch</span>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-icon">🏠</div>
            <h3>Smart Home System</h3>
            <p>
              An automated home monitoring system with sensors for temperature, light, and 
              motion detection. Includes automated responses to environmental changes.
            </p>
            <div className="project-tech">
              <span className="tech-tag">IoT</span>
              <span className="tech-tag">Sensors</span>
              <span className="tech-tag">Bluetooth</span>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-icon">🎮</div>
            <h3>Game Playing Robot</h3>
            <p>
              A robot designed to play simple games like tic-tac-toe using computer vision 
              and strategic algorithms to make optimal moves.
            </p>
            <div className="project-tech">
              <span className="tech-tag">AI</span>
              <span className="tech-tag">Camera</span>
              <span className="tech-tag">Java</span>
            </div>
          </div>
        </div>
        
        <div className="competitions-section">
          <h2>Competitions & Achievements</h2>
          <div className="achievements-list">
            <div className="achievement">
              <div className="achievement-icon">🥇</div>
              <div className="achievement-info">
                <h4>Regional Robotics Championship</h4>
                <p>First place in autonomous navigation challenge</p>
              </div>
            </div>
            <div className="achievement">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-info">
                <h4>Innovation Award</h4>
                <p>Recognition for creative problem-solving approach</p>
              </div>
            </div>
            <div className="achievement">
              <div className="achievement-icon">🎯</div>
              <div className="achievement-info">
                <h4>Programming Excellence</h4>
                <p>Best code quality and documentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robotics;