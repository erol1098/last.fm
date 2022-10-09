import { render, screen } from '@testing-library/react';
import Text from './Text';

test('render Text Component', () => {
  render(<Text children='example' />);
  const paragraphElement = screen.getByText('example');
  expect(paragraphElement).toBeInTheDocument();
});

test('check if Text Component has p element', () => {
  render(<Text children='example' />);
  const paragraphElement = screen.getByText('example');
  expect(paragraphElement).toContainHTML('p');
});
