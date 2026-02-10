function getFlag(countryCode) {
  const OFFSET = 127397;

  return countryCode
    .toUpperCase()
    .split('')
    .map(char => String.fromCodePoint(char.charCodeAt(0) + OFFSET))
    .join('');
}
