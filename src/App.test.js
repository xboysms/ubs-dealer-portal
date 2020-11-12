import React from 'react';
import { render } from '@testing-library/react';
import Copyright from './component/Copyright';

test('test copy right', () => {
  const { getByText } = render(<Copyright />);
  const linkElement = getByText(/Duy Ha Le/i);
  expect(linkElement).toBeInTheDocument();
});
