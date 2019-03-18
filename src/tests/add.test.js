const add = (a, b) => a + b;

test('should add two numbers', () => {
  const result = add(3, 4);

  if (result !== 7) {
    throw new Error(`You added 4 and 3, we expected 7, but your result was ${result}...UH OH`)
  }
})
