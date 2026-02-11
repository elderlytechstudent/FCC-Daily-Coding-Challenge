// thought about it some more and realized this was more efficient
function computeScore (judgeScores, ...penalties) {

  const total = judgeScores.reduce((acc, val) => acc + val, 0);

  const min = Math.min(...judgeScores);

  const max = Math.max(...judgeScores);

  const baseScore = total - min - max;

  const totalPenalties = penalties.reduce((acc, val) => acc + val, 0);

  return baseScore - totalPenalties;
}


// first inclination
// function computeScore(judgeScores, ...penalties) {
  
//   const removeHighAndLow = (judgeScores) => {
//     const sortedScores = [...judgeScores].sort((a, b) => a - b);
//     return sortedScores.slice(1, -1);
//   }

//   const remainingScores = [...removeHighAndLow(judgeScores)];

//   const sum = remainingScores.reduce((acc, val) => acc + val, 0);

//   const sumOfPenalties = penalties.reduce((acc, val) => acc + val, 0);

//   return sum - sumOfPenalties;
// }
