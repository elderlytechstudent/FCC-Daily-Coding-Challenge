// concise 
function largestDifference(skater1, skater2) {
  const diffs = skater1.map((time, i) => Math.abs(time - skater2[i]));
    return diffs.indexOf(Math.max(...diffs)) + 1;
}




// "longer" way

// function largestDifference(skater1, skater2) {
  
//   const differences = [];
//   for (let i = 0; i < skater1.length; i++) {
//     differences.push(Math.abs(skater1[i] - skater2[i]));
//   }

//   const maxValue = Math.max(...differences);

//   const maxIndex = differences.indexOf(maxValue);

//   return maxIndex + 1;
// }
