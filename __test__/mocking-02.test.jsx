describe('Mocking 02', () => {
  it('returns undefined by default', () => {
    const mock = jest.fn();

    let result = mock('smoe arg');

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('smoe arg');
  });
  it('mock implementation', () => {
    // const mock = jest.fn(() => 'hello'); 1.yol
    const mock = jest
      .fn()
      .mockImplementation(() => 'hello'); //2.yol

    let result = mock('smoe arg');

    expect(result).toBe('hello');
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('smoe arg');
  });
  it('also mock implementation', () => {
    const mock = jest
      .fn()
      .mockImplementation(() => 'return something'); //2.yol
    let result = mock('some arg');
    expect(mock('some arg')).toBe('return something');
    expect(mock).toHaveBeenCalledWith('some arg');
  });

  it('mock implementation one more time', () => {
    const mock = jest
      .fn()
      .mockImplementationOnce(() => 'return something');
    expect(mock('some arg')).toBe('return something');
    expect(mock).toHaveBeenCalledWith('some arg');

    expect(mock('baz')).toBeUndefined();
    expect(mock).toHaveBeenCalledTimes(2);
  });
  it('mock return value', () => {
    // const mock = jest.fn(() => 'return value'); 1.yol
    const mock = jest.fn().mockReturnValue('return value'); //2.yol

    expect(mock('some arg')).toBe('return value');
    expect(mock).toHaveBeenCalledWith('some arg');
  });
  it('mock promise resolution', async () => {
    const mock = jest.fn();
    mock.mockResolvedValue('promise reslove value');

    const result = await mock('some arg');
    expect(mock).toHaveBeenCalledWith('some arg');

    await expect(result).toBe('promise reslove value'); //1.yol

    // await expect(mock('some arg')).resolves.toBe('promise reslove value'); //2.yol
  });
  it('mock promise rejection', async () => {
    const error = new Error('some error');
    const mock = jest.fn().mockRejectedValue(error); //1. yol hata firlatir
    // const mock = jest.fn().mockRejectedValue('some error2'); //2. yol hata mesaaji firlatir

    await expect(mock('some arg')).rejects.toThrow(error); //1.yol
    // await expect(mock('some arg')).rejects.toThrowError();
    // await expect(mock('some arg')).rejects.toBe('some error2'); //2.yol custom message
  });
});
