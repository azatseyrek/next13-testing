import { render, screen } from '@testing-library/react';

import PostPage from '../app/posts/page';

describe('PostPage', () => {
  it('should render PostPage', () => {
    const ListingComponent = () => {
      return <div data-testid="listing">ListingComponent</div>;
    };

    render(<PostPage ListingComponent={ListingComponent} />); //dependency injection

    screen.debug(); //debug ettigimizde List componenti yerine bizim verdigimiz componenti gorecegiz
    expect(screen.getByTestId('listing')).toBeInTheDocument();
    const titleEl = screen.getByRole('heading', { name: /posts/i });
    expect(titleEl).toBeInTheDocument();
  });
});
