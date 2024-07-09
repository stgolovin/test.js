import checkLuhn from '../luhnValidator';

test.each([
  ['true for valid organization Inn', '4485758227566469', true],
  ['false for invalid organization Inn', '3242342', false],
])(('it should be %s'), (_, input, expected) => {
  expect(checkLuhn(input)).toBe(expected);
});
