import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './Header';
import store from '../../lib/';

test('check if header component have heading element', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>,
    { wrapper: BrowserRouter }
  );
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});
test('check if header component have site name', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>,
    { wrapper: BrowserRouter }
  );
  const headingElement = screen.getByText(/last.fm/i);
  expect(headingElement).toBeInTheDocument();
});
