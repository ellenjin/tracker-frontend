import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import GroupPage from '../features/groups/GroupPage';
import { vi, describe, it, beforeEach, expect } from 'vitest';

// Mock react-router-dom's useNavigate 
const mockedNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

// Mock the API functions used inside GroupPage
vi.mock('../requests/groupApi', () => ({
  postGroupApi: vi
    .fn()
    .mockResolvedValue({ id: 3, name: 'New Group', description: 'Desc' }),
  putAddUserToGroupApi: vi.fn().mockResolvedValue({}),
}));

describe('GroupPage', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
  });

  it('renders group names in buttons', () => {
    const groups = [
      {
        id: 1,
        name: 'Hiking Enthusiasts',
        description: 'Group for mountain hiking',
      },
      { id: 2, name: 'Literary Circle', description: 'Book lovers unite' },
    ];

    render(<GroupPage groupList={groups} userId={42} />);

    expect(screen.getByText(/Hiking Enthusiasts/i)).toBeInTheDocument();
    expect(screen.getByText(/Literary Circle/i)).toBeInTheDocument();
  });

  it('clicking group button navigates to correct group page', async () => {
    const groups = [
      {
        id: 1,
        name: 'Hiking Enthusiasts',
        description: 'Group for mountain hiking',
      },
    ];

    render(<GroupPage groupList={groups} userId={42} />);

    const groupButton = screen.getByRole('button', {
      name: /Hiking Enthusiasts/i,
    });
    await userEvent.click(groupButton);

    expect(mockedNavigate).toHaveBeenCalledWith('/groups/1');
  });
});
