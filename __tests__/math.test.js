const { add, subtract, multiply, divide, modulus } = require('../src/math');

describe('math module', () => {
  test('add adds positive numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtract subtracts numbers', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiply multiplies numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('divide divides numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('modulus returns remainder', () => {
    expect(modulus(10, 3)).toBe(1);
  });

  // Intentionally failing tests
  test('add intentionally wrong expectation', () => {
     expect(add(1, 2)).toBe(4); // should fail
  });

  test('subtract intentionally wrong expectation', () => {
     expect(subtract(5, 2)).toBe(1); // should fail
  });

  test('divide by zero throws error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('divide by zero wrong message', () => {
     expect(() => divide(10, 0)).toThrow('Some other message'); // should fail
  });
});

