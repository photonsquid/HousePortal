import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from 'App';

test('renders app correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Logging in/i);
  expect(linkElement).toBeInTheDocument();
});
