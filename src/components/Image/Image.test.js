import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../lib/';
import Image from './Image';

test('check if Image Component has img element', () => {
  render(
    <Provider store={store}>
      <Image />
    </Provider>
  );
  const imageElement = screen.getByRole('img');
  expect(imageElement).toBeInTheDocument();
});

test('check if img element has alt attribute', () => {
  render(
    <Provider store={store}>
      <Image alt='example' />
    </Provider>
  );
  const imageElement = screen.getByAltText('example');
  expect(imageElement).toBeInTheDocument();
});
