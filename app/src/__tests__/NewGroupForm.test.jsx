/* eslint-disable no-undef */
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import NewGroupForm from '../features/groups/NewGroupForm';
import { afterEach, describe, beforeEach, expect } from 'vitest';

const group = {
  name: 'Nature Hikes',
  picture: '/public/assets/nature.jpg',
  description: 'Group for weekend hiking trips and nature walks.',
};

test('Render NewGroupForm component', () => {
  // Arrange
  render(<NewGroupForm />);
  screen.debug();
});

describe('NewGroupForm Component', () => {
  let user = userEvent.setup();
  beforeEach(() => {
    render(<NewGroupForm />);
  });

  afterEach(cleanup);

  describe('Form fields', () => {
    it('Shows input field for group name', () => {
      const input = screen.getByLabelText('Name');
      expect(input).toBeInTheDocument();
      expect(input.value).toBe('');
    });

    it('Shows the name that the user types in field', async () => {
      const input = screen.getByLabelText('Name');
      await user.type(input, group.name);
      expect(input.value).toEqual('Nature Hikes');
    });

    it('Shows input field for group description', () => {
      const input = screen.getByLabelText('Name');
      expect(input).toBeInTheDocument();
      expect(input).not.toHaveAttribute('placeholder');
      expect(input.value).toBe('');
    });

    it('Shows the description that the user types in field', async () => {
      const input = screen.getByLabelText('Description');
      await user.type(input, group.description);
      expect(input.value).toEqual(
        'Group for weekend hiking trips and nature walks.'
      );
    });
  });

  describe('Create new group button', () => {
    it('Shows submit button', () => {
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Create Group');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it.skip('Creates a new group ', () => {});
  });
});
