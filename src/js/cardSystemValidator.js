export default function getCardSystem(cardNumber) {
  const number = cardNumber.toString();
  if (/^3[47]/.test(number)) {
    return 'AmericanExpress';
  }
  if (/^5[1-5]/.test(number)) {
    return 'MasterCard';
  }
  if (/^3(?:0[0-5]|[68])/.test(number)) {
    return 'DinersClub';
  }
  if (/^6(?:011|5)/.test(number)) {
    return 'Discover';
  }
  if (/^220[0-4]/.test(number)) {
    return 'MIR';
  }
  if (/^35[2-8]/.test(number)) {
    return 'JCB';
  }
  if (/^4/.test(number)) {
    return 'Visa';
  }
  return 'Unknown';
}
