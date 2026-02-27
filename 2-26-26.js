function countLettersAndNumbers(str) {
  let letters = 0;
  let numbers = 0;
  for (const char of str) {
    if (/^[a-z]$/i.test(char)) {
      letters++;
    };
    if (/\d/.test(char)) {
      numbers++;
    }
  }
const letterString = letters === 1 ? "1 letter" : `${letters} letters`;
const numberString = numbers === 1 ? "1 number" : `${numbers} numbers`;

return `The string has ${letterString} and ${numberString}.`;
}
