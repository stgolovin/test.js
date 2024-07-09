import getCardSystem from '../cardSystemValidator';

describe('getCardSystem', () => {
  test('detects Visa card', () => {
    expect(getCardSystem('4111111111111111')).toBe('Visa');
  });

  test('detects MasterCard card', () => {
    expect(getCardSystem('5105105105105100')).toBe('MasterCard');
  });

  test('detects American Express card', () => {
    expect(getCardSystem('371449635398431')).toBe('AmericanExpress');
  });

  test('detects Discover card', () => {
    expect(getCardSystem('6011111111111117')).toBe('Discover');
  });

  test('detects Diners Club card', () => {
    expect(getCardSystem('30569309025904')).toBe('DinersClub');
  });

  test('detects JCB card', () => {
    expect(getCardSystem('3528000700000000')).toBe('JCB');
  });

  test('detects Mir card', () => {
    expect(getCardSystem('2200123456789010')).toBe('MIR');
  });

  test('returns unknown for invalid card', () => {
    expect(getCardSystem('1234567890123456')).toBe('Unknown');
  });
});
