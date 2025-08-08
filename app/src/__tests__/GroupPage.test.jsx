/* eslint-disable no-undef */
import { render, screen, userEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import GroupPage from '../features/groups/GroupPage';
// import { afterEach, beforeEach } from 'vitest';
// import AxiosMock from 'axios';

test('Render GroupDetails component', () => {
  // Arrange
  render(<GroupPage />);
  screen.debug();
});
