function calculatePenaltyDistance(rounds) {
  const badRounds = rounds.map(round => 5 - round);
  const penaltyDistance = badRounds.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }) * 150;
  return penaltyDistance;
}
