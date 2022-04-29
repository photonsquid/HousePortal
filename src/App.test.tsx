import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from 'App';

ReactDOM.render(<App />, document.getElementById('root'));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/GitHub/i);
  expect(linkElement).toBeInTheDocument();
});
