const moduleA = {
  sayHi() {}
};

const moduleB = {
  sayBye() {}
};

const createSpies = (spies: jest.SpyInstance<any>[]) => () => spies.forEach(spy => spy.mockRestore());

// Test
it('should...', () => {
  const restoreMocks = createSpies([
    jest.spyOn(moduleA, 'sayHi').mockImplementation(() => 'mock hello'),
    jest.spyOn(moduleB, 'sayBye').mockImplementationOnce(() => 'mock goodbye')
  ]);

  // Do tests...

  restoreMocks();
});
