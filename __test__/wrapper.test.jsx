import { screen } from '@testing-library/react';

import { customRender } from '../utils/test-utils';

const TestComponent = () => {
  return <div>Test</div>;
};

describe('Wrapper', () => {
  it('should render the children', () => {
    customRender(<TestComponent />);
    // screen.debug();
  });
});
