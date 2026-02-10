        function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
    const totalScore = distancePoints + stylePoints + windComp + kPointBonus;
    const currentScores = [165.5,
  172.0,
  158.0,
  180.0,
  169.5,
  175.0,
  162.0,
  170.0];
    currentScores.push(totalScore);
    currentScores.sort((b, a) => a - b);
    if (totalScore === currentScores[0]) {
      return "Gold";
    } else if (totalScore === currentScores[1]) {
      return "Silver";
    } else if (totalScore === currentScores[2]) {
      return "Bronze";
    }
    return "No Medal";
  }
  
  console.log(skiJumpMedal(125.0, 58.0, 0.0, 6.0));
