/* eslint-disable no-undef */
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import NewGroupForm from '../features/groups/NewGroupForm';
import { afterEach, describe, beforeEach, expect } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { postGroupApi } from '../requests/groupApi';

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

    it.skip('Shows the input to upload a picture', async () => {
      const input = screen.getByLabelText('Picture');
      await user.upload(input, group.picture);
      expect(input.value).toEqual('/public/assets/nature.jpg');
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
test.skip('Sends the correct group data when the form is submitted', async () => {
  let response;
  mock.onPost('http://localhost:8080/groups').reply((config) => {
    response = JSON.parse(config.data);
    return [200, { message: 'Group created successfully' }];
  });

  render(<NewGroupForm createGroup={postGroupApi} />);
  const name = screen.getByLabelText('Name');
  const picture = screen.getByLabelText('Picture');
  const file = new File(['test'], 'nature.jpg', { type: 'image/jpeg' });
  const description = screen.getByLabelText('Description');
  const button = screen.getByRole('button', { name: /create group/i });

  await user.type(name, 'Nature Hikes');
  await user.upload(picture, file);
  await user.type(
    description,
    'Group for weekend hiking trips and nature walks.'
  );
  await user.click(button);

  expect(response).toEqual({
    description: 'Group for weekend hiking trips and nature walks.',
    name: 'Nature Hikes',
    picture: file,
  });
});
