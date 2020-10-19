import React from 'react';
import { render } from '@testing-library/react';
import Copyright from './component/Copyright';

test('test copy right', () => {
  const { getByText } = render(<Copyright />);
  const linkElement = getByText(/Ultimate Business Systems/i);
  expect(linkElement).toBeInTheDocument();
});
