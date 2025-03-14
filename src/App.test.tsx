import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders learn vite link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Click/i);
  expect(linkElement).toBeInTheDocument();
});