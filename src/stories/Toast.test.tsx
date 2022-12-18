import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Example } from './Toast.stories';

test('renders test component', () => {
  render(<Example />);

  const test = screen.getByText(/Hello/i);

  expect(test).toBeInTheDocument();
});
