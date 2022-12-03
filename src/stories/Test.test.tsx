import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Test } from '../../src/components/test';

test('renders test component', () => {
  render(<Test />);

  const test = screen.getByText(/Hi man!/i);
  // screen.debug();

  expect(test).toBeInTheDocument();
});
