const math = require('../operations');
//const {add, subtract, divide, multiply} = require('../operations')

test('The add functoion return a number.', () => {
  expect(typeof math.add(1, 2)).toBe('number');
});

test('The add function should return 3 with 1 and 2.', () => {
  expect(math.add(1, 2)).toBe(3);
});

test('The subtract function should return 2 with 5 and 3.', () => {
  expect(math.subtract(5, 3)).toBe(2);
});

test('The multiply function should return 20 with 10 and 2.', () => {
  expect(math.multiply(10, 2)).toBe(20);
});
