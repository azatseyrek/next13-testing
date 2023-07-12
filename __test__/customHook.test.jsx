import React from 'react';

import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

function useCustomHook() {
  const [name, setName] = React.useState('John Doe');

  const changeName = (newName) => {
    setName(newName);
  };

  return {
    name,
    changeName,
  };
}

it('should change name', () => {
  const { result } = renderHook(() => useCustomHook());

  expect(result.current.name).toBe('John Doe');

  act(() => {
    result.current.changeName('Azat');
  }); //act is used to trigger the state update. It takes a function that will trigger the state update.

  expect(result.current.name).toBe('Azat');
});
