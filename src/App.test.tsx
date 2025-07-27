import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LEGO Robotics Team navigation', () => {
  render(<App />);
  const logoElement = screen.getByText(/LEGO Robotics Team/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders welcome message on home page', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to Our LEGO Robotics Team/i);
  expect(welcomeElement).toBeInTheDocument();
});
