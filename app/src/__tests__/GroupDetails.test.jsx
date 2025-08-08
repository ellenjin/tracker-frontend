/* eslint-disable no-undef */
import { render, screen, userEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import GroupDetails from '../features/groups/GroupDetails';
import { afterEach, beforeEach } from 'vitest';
import AxiosMock from 'axios';

const group = {
  id: 1,
  name: 'Nature Hikes',
  picture: '/public/assets/nature.jpg',
  description: 'Group for weekend hiking trips and nature walks.',
};

test('Render GroupDetails component', () => {
  // Arrange
  render(<GroupDetails currentGroup={group} />);
  screen.debug();
});

describe('GroupDetails Component', () => {
  beforeEach(() => {
    render(<GroupDetails currentGroup={group} />);
  });

  afterEach(cleanup);

  describe('Static content', () => {
    it('shows group picture', () => {
      const picture = screen.getByRole('img');
      expect(picture).toBeInTheDocument();
      expect(picture).toHaveAttribute('src', '/public/assets/nature.jpg');
    });

    it('Header shows group name', () => {
      const header = screen.getByRole('heading');
      expect(header).toBeInTheDocument();
      expect(header).toHaveTextContent('Nature Hikes');
    });

    it('renders the group description text', () => {
      const par = screen.getByLabelText('group-description');
      expect(par).toBeInTheDocument();
      expect(par).toHaveTextContent(
        'Group for weekend hiking trips and nature walks.'
      );
    });
  });

  describe('Buttons', () => {
    // Arrange
    let buttons;

    beforeEach(() => {
      buttons = screen.getAllByRole('button');
    });

    it('renders the checkin button', () => {
      const checkInBtn = buttons[0];
      expect(checkInBtn).toBeInTheDocument();
      expect(checkInBtn).toHaveTextContent('Check-in');
    });
    // Need to create mock api request for put request to update clicked log
    it.skip('checks user in on click', async () => {
      const checkInBtn = buttons[0];
      userEvent.click(checkInBtn);
      const count = await screen.findByLabelText(/check-in-count/i);
      expect(checkInBtn).toBeDisabled();
      expect(count).toBeInTheDocument();
      expect(count).toHaveTextContent('1');
    });

    it('renders the text all button', () => {
      const textAllBtn = buttons[1];
      expect(textAllBtn).toBeInTheDocument();
      expect(textAllBtn).toHaveTextContent('Text all');
    });
    it.skip('texts all group members a reminder to check in', () => {});

    it('renders the remind button', () => {
      const remindBtn = buttons[2];
      expect(remindBtn).toBeInTheDocument();
      expect(remindBtn).toHaveTextContent('Remind');
    });
    it.skip('texts one group member a reminder to check in');
  });
});
