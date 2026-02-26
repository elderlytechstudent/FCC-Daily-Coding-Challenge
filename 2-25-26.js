function findDifferences(arr) {
const arr2 = arr.slice(1).map((currVal, index) => {
  const prevVal = arr[index];
  return currVal - prevVal;
});
  arr2.push(0);
  return arr2;
}
