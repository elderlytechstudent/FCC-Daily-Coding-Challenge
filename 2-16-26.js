function getSemifinalMatchups(teams) {
  const teamData = teams.map(item => {

    const [country, recordStr] = item.split(':');

    const scores = recordStr.trim().split('-');

    const w = Number(scores[0]) * 3;
    const otw = Number(scores[1]) * 2;
    const otl = Number(scores[2]) * 1;
    const totalScore = w + otw + otl;

    return { country, totalScore };
  });

  teamData.sort((a, b) => b.totalScore - a.totalScore);

  const s1 = teamData[0].country;
  const s2 = teamData[1].country;
  const s3 = teamData[2].country;
  const s4 = teamData[3].country;

  return `The semi-final games will be ${s1} vs ${s4} and ${s2} vs ${s3}.`;
}
