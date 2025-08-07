/* eslint-disable no-undef */
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import NewGroupForm from '../features/groups/NewGroupForm';
import { afterEach, describe, beforeEach, expect } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import PictureUpload from '../features/groups/PictureUpload';

const mock = new MockAdapter(axios);
const user = userEvent.setup();

test('Render NewGroupForm component', () => {
  // Arrange
  render(<NewGroupForm />);
  screen.debug();
});

describe('Tests elements in the NewGroupForm component', () => {
  const group = {
    name: 'Nature Hikes',
    picture: '/public/assets/nature.jpg',
    description: 'Group for weekend hiking trips and nature walks.',
  };

  beforeEach(() => {
    mock.reset();
    render(<NewGroupForm />);
  });

  afterEach(cleanup);

  describe('Updates the form fields correctly', () => {
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

    it('Renders input to upload a picture', () => {
      render(<PictureUpload />);
      screen.debug();
    });

    it.skip('Clicking on label button uploads file', async () => {});
  });

  describe('Button', () => {
    it.skip('Shows create new group button', () => {
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Create Group');
      expect(button).toHaveAttribute('type', 'submit');
    });
  });
});

// Integration test - form submission THIS FAILS BECAUSE YOU NEED TO WRITE THE CODE ON THE FRONTEND
test('Sends the correct group data when the form is submitted', async () => {
  let reqBody;
  mock.onPost('/groups').reply((config) => {
    reqBody = JSON.parse(config.data);
    return [200, { message: 'Group created successfully' }];
  });

  render(<NewGroupForm />);
  const name = screen.getByLabelText('Name');
  const description = screen.getByLabelText('Description');
  const button = screen.getByRole('button', { name: /create group/i });

  await user.type(name, 'Nature Hikes');
  await user.type(
    description,
    'Group for weekend hiking trips and nature walks.'
  );
  await user.click(button);

  expect(reqBody).toEqual({
    name: 'Nature Hikes',
    description: 'Group for weekend hiking trips and nature walks.',
  });
});
