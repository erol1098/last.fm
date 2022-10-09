import { render, screen } from '@testing-library/react';

import Button from './Button';

test('check if Button Component has button element', () => {
  render(<Button />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});

test('check if Button Component have label', () => {
  render(<Button variant='primary' children='test' />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement.textContent).toBeTruthy();
});
