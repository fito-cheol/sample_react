import { render, screen } from '@testing-library/react';
import App from './App';
import { expect } from '@jest/globals';

beforeEach(() => {
  import.meta.env = {
    VITE_APP_TITLE: 'Test Title'
  };
});

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/소개/i);
	expect(linkElement).toBeInTheDocument();
});
