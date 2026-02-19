function calculateStartDelays(jumpScores) {
  const bestOverall = Math.max(...jumpScores);
  return jumpScores.map(eachScore => Math.ceil((bestOverall - eachScore) * 1.5));
}
