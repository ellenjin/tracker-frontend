import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach} from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import GroupPage from '../features/groups/GroupPage';
import * as groupApi from '../requests/groupApi';

describe('GroupPage with NewGroupForm inside', () => {
  const user = userEvent.setup();

  const groups = [
    {
      id: 1,
      name: 'Hiking Enthusiasts',
      description: 'Group for mountain hiking',
      picture: '/assets/hiking.jpg',
    },
    {
      id: 2,
      name: 'Literary Circle',
      description: 'Book lovers unite',
      picture: '/assets/books.jpg',
    },
  ];

  beforeEach(() => {
    // Reset mocks before each test
    vi.restoreAllMocks();
  });

  it('renders group names in buttons', () => {
    render(
      <MemoryRouter>
        <GroupPage groupList={groups} userId={42} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Hiking Enthusiasts/i)).toBeInTheDocument();
    expect(screen.getByText(/Literary Circle/i)).toBeInTheDocument();
  });

  it('renders empty form fields initially', () => {
    render(
      <MemoryRouter>
        <GroupPage groupList={groups} userId={42} />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/Name/i).value).toBe('');
    expect(screen.getByLabelText(/Description/i).value).toBe('');
  });

  it('submits form and calls API with correct data', async () => {
    // Mock the postGroupApi function
    const postGroupApiMock = vi
      .spyOn(groupApi, 'postGroupApi')
      .mockResolvedValue({
        id: 99,
        name: 'Weekend Hikers',
        picture: '', // adjust if your form sends something else
        description: 'Group for hiking every weekend.',
      });

    render(
      <MemoryRouter>
        <GroupPage groupList={groups} userId={42} />
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText(/Name/i);
    const descriptionInput = screen.getByLabelText(/Description/i);
    const createButton = screen.getByRole('button', { name: /create group/i });

    await user.type(nameInput, 'Weekend Hikers');
    await user.type(descriptionInput, 'Group for hiking every weekend.');

    await user.click(createButton);

    expect(postGroupApiMock).toHaveBeenCalledWith({
      groupName: 'Weekend Hikers',
      groupPicture: '',
      groupDescription: 'Group for hiking every weekend.',
    });

    postGroupApiMock.mockRestore();
  });
});
