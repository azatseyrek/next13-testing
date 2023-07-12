import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />); //Arrange
    const heading = screen.getByRole('heading', {
      name: /welcome to test app/i,
    }); //Act
    expect(heading).toBeInTheDocument(); //Assertion
  });
});
