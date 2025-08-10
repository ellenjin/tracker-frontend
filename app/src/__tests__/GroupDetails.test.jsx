import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, beforeEach, afterEach, expect } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import GroupDetails from '../features/groups/GroupDetails';
import * as groupApi from '../requests/groupApi';

// Mock react-router useParams with MemoryRouter and route param
const groupId = '1';

// Mock group data returned from API
const mockGroup = {
  id: 1,
  name: 'Nature Hikes',
  picture: '/public/assets/nature.jpg',
  description: 'Group for weekend hiking trips and nature walks.',
};

describe('GroupDetails Component', () => {
  beforeEach(() => {
    // Mock getOneGroupApi to resolve with mockGroup
    vi.spyOn(groupApi, 'getOneGroupApi').mockResolvedValue(mockGroup);
    vi.spyOn(groupApi, 'getAllGroupUsersApi').mockResolvedValue([]);
    vi.spyOn(groupApi, 'postTextMemberApi').mockResolvedValue({});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders group name, picture, description, and buttons', async () => {
    render(
      <MemoryRouter initialEntries={[`/groups/${groupId}`]}>
        <Routes>
          <Route path="/groups/:groupId" element={<GroupDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for async data load
    const heading = await screen.findByRole('heading', {
      name: /nature hikes/i,
    });
    expect(heading).toBeDefined();

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mockGroup.picture);
    expect(image).toHaveAttribute('alt', 'A flower in a field');

    const description = screen.getByLabelText('group-description');
    expect(description).toHaveTextContent(mockGroup.description);

    expect(screen.getByText(/you haven't checked-in today!/i)).toBeDefined();

    // Buttons
    const checkinBtn = screen.getByRole('button', { name: /check-in/i });
    expect(checkinBtn).toBeDefined();

    const textAllBtn = screen.getByRole('button', { name: /text all/i });
    expect(textAllBtn).toBeDefined();

    const remindBtn = screen.getByRole('button', { name: /remind/i });
    expect(remindBtn).toBeDefined();
  });

  it('calls API when "Text all" button is clicked', async () => {
    render(
      <MemoryRouter initialEntries={[`/groups/${groupId}`]}>
        <Routes>
          <Route path="/groups/:groupId" element={<GroupDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for group name to appear
    await screen.findByRole('heading', { name: /nature hikes/i });

    const textAllBtn = screen.getByRole('button', { name: /text all/i });

    await userEvent.click(textAllBtn);

    expect(groupApi.postTextMemberApi).not.toHaveBeenCalled();
  });

  it('shows fallback message if no group data', async () => {
    // Override getOneGroupApi to resolve null
    groupApi.getOneGroupApi.mockResolvedValueOnce(null);

    render(
      <MemoryRouter initialEntries={[`/groups/${groupId}`]}>
        <Routes>
          <Route path="/groups/:groupId" element={<GroupDetails />} />
        </Routes>
      </MemoryRouter>
    );

    const noGroupMessage = await screen.findByText(/no group id found/i);
    expect(noGroupMessage).toBeDefined();
  });
});
