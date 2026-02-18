function checkEligibility(athleteWeights, sledWeight) {

  const teamSize = athleteWeights.length;

  const teamWeight = athleteWeights.reduce((acc, currVal) => acc + currVal, 0);

  if (teamSize === 1) {
    if (sledWeight >= 162 && teamWeight + sledWeight <= 247) {
      return "Eligible"
    }
  } else if (teamSize === 2) {
    if (sledWeight >= 170 && teamWeight + sledWeight <= 390) {
      return "Eligible"
    }
  } else if (teamSize === 4) {
    if (sledWeight >= 210 && teamWeight + sledWeight <= 630) {
      return "Eligible"
    }
  }
  return "Not Eligible";
}
