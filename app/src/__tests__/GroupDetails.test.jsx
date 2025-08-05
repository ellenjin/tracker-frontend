/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GroupDetails from '../features/groups/GroupDetails';

const name = 'Nature Hikes';
const picture = '/public/assets/nature.jpg';
const description = 'Group for weekend hiking trips and nature walks.';

test('Render GroupDetails component', () => {
  render(
    <GroupDetails name={name} picture={picture} description={description} />
  );
  screen.debug();
});

describe('GroupDetails Component', () => {
  beforeEach(() => {
    render(
      <GroupDetails name={name} picture={picture} description={description} />
    );
  });

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
      const par = screen.getByLabelText(/description/i);
      expect(par).toBeInTheDocument();
      expect(par).toHaveTextContent(
        'Group for weekend hiking trips and nature walks.'
      );
    });
  });

  // describe('Buttons', () => {
  //   it('renders the join button');

  //   it('renders the leave button');
  //});
});
