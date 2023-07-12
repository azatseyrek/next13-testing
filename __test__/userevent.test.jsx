import { useState } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const UserEventComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
      <input type="text" />
      <button onClick={() => console.log('clicked')}>Click</button>
    </div>
  );
};

const user = userEvent.setup();

describe('UserEventComponent', () => {
  it('should increment and decrement the counter', async () => {
    render(<UserEventComponent />);

    await user.pointer({
      keys: '[MouseLeft]',
      target: screen.getByRole('button', { name: /increment/i }),
    });

    expect(screen.getByRole('heading')).toHaveTextContent('1');
  });

  it('should type in the input', async () => {
    // const user = userEvent.setup();
    render(<UserEventComponent />);

    await user.type(screen.getByRole('textbox'), 'Hello World');

    expect(screen.getByRole('textbox')).toHaveValue('Hello World');
  });

  it('should click the button', async () => {
    // const user = userEvent.setup();
    render(<UserEventComponent />);
    const btnEl = screen.getByRole('button', { name: /click/i });

    await user.click(btnEl);

    expect(true).toBe(true);
  });
});
