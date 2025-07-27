import React from 'react';
import './Pages.css';

const About: React.FC = () => {
  return (
    <div className="page">
      <div className="content-section">
        <h1>About Our Team</h1>
        <p className="intro-text">
          Our LEGO Robotics Team was founded with a simple mission: to inspire creativity, 
          innovation, and teamwork through hands-on robotics education.
        </p>
        
        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              We believe that robotics is more than just building machines – it's about solving 
              real-world problems, working together as a team, and pushing the boundaries of 
              what's possible with creativity and determination.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Our Values</h2>
            <ul className="values-list">
              <li><strong>Innovation:</strong> We constantly seek new and creative solutions</li>
              <li><strong>Collaboration:</strong> We work together to achieve our goals</li>
              <li><strong>Learning:</strong> We embrace challenges as opportunities to grow</li>
              <li><strong>Fun:</strong> We believe learning should be enjoyable and engaging</li>
            </ul>
          </div>
          
          <div className="about-section">
            <h2>Team Members</h2>
            <p>
              Our team consists of dedicated students, mentors, and volunteers who share a 
              passion for robotics and technology. Together, we form a community that supports 
              learning, creativity, and achievement.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Get Involved</h2>
            <p>
              Interested in joining our team or learning more about what we do? We welcome 
              new members and supporters who share our enthusiasm for robotics and innovation.
              Contact us to learn about upcoming meetings and events!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;