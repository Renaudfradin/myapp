const sum = require('./sum');

test('1 + 3 equal 4', () => {
  expect(sum(1, 3)).toBe(4);
});