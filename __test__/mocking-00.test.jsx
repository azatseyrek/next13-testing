import Home from '@/app/page';
import useFetch from '@/hooks/useFetch';
import { render, screen } from '@testing-library/react';

import mockPosts from '../mocks/mockPosts';

jest.mock('../hooks/useFetch');

describe('<Home />', () => {
  it('should render loading text', () => {
    useFetch.mockReturnValue({
      data: mockPosts,
      loading: true,
    });
    render(<Home />);
    // screen.debug();

    expect(
      screen.getByText('Loading...'),
    ).toBeInTheDocument();
  });

  it('should render posts', () => {
    useFetch.mockReturnValue({
      data: mockPosts,
      loading: false,
    });

    render(<Home />);
    // screen.debug();

    const listItems = screen.getAllByRole('listitem');

    expect(
      screen.getByText('lorem ipsum'),
    ).toBeInTheDocument();

    expect(listItems).toHaveLength(mockPosts.length);
  });
});
