import Button from '../components/button';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const randomFunction = jest.fn();

describe('<Button />', () => {
  it('should call onClick function when clicked ', async () => {
    const user = userEvent.setup();
    render(<Button onClick={randomFunction}>Modern testing</Button>);

    const btnEl = screen.getByRole('button', { name: /modern testing/i });
    await user.click(btnEl);
    expect(randomFunction).toHaveBeenCalledTimes(1);
    expect(randomFunction).toHaveBeenCalledWith('hey clicked');
  });
});
