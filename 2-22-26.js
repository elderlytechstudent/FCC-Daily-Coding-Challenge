function countMedals(winners) {
  const stats = {};

  winners.forEach(([gold, silver, bronze]) => {
    [gold, silver, bronze].forEach(country => {
      if (!stats[country]) {
        stats[country] = { Gold: 0, Silver: 0, Bronze: 0, Total: 0 };
      }
    });

    stats[gold].Gold++;
    stats[silver].Silver++;
    stats[bronze].Bronze++;
  });

  const resultTable = Object.entries(stats).map(([name, counts]) => {
    const total = counts.Gold + counts.Silver + counts.Bronze;
    return { name, ...counts, Total: total };
  });

  resultTable.sort((a, b) => {
    if (b.Gold !== a.Gold) return b.Gold - a.Gold;
    return a.name.localeCompare(b.name);
  });

  const header = "Country,Gold,Silver,Bronze,Total";
  const rows = resultTable.map(c => 
    `${c.name},${c.Gold},${c.Silver},${c.Bronze},${c.Total}`
  );

  return [header, ...rows].join("\n");
}
