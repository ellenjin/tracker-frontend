/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GroupDetails from '../features/groups/GroupDetails';

// TEST BEHAVIOR

// Render component
test('Shows group details comopnent', () => {
  render(<GroupDetails />);
  screen.debug();
});
test('Header shows group title', () => {
  render(<GroupDetails />);
  const header = screen.getByRole('heading');
  expect(header).toBeInTheDocument();
});

// describe()
// it('Shows button to remind one member')
// it('Shows button to text all member')
// it('Shows checkin button')
