import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Example } from './Toast.stories';
import { TOAST_CONTAINER_ID } from 'data/constants';

test('renders test component', () => {
  render(<Example position='top-right' type='info' text='Toast example' />);

  const container = document.getElementById(TOAST_CONTAINER_ID);

  expect(container).toBeInTheDocument();
});
