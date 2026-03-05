function cardValues(cards) {
const newArr = cards.map(str => str.slice(0, -1));
const intValues = newArr.map(val => {
  if (val === "A") {
    let newVal = 1;
    return newVal;
  } else if (val === "J" || val === "Q" || val === "K") {
    let newVal = 10;
    return newVal;
  } else {
    let newVal = Number(val);
    return newVal;
  }
})
  return intValues;
}
