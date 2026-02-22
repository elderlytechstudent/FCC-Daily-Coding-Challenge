function scoreCurling(house) {
  let redRings = [];
  let yellowRings = [];

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const stone = house[r][c];
      if (stone === ".") continue;

      const ring = Math.max(Math.abs(r - 2), Math.abs(c - 2));
      
      if (stone === "R") redRings.push(ring);
      if (stone === "Y") yellowRings.push(ring);
    }
  }

  redRings.sort((a, b) => a - b);
  yellowRings.sort((a, b) => a - b);

  const minRed = redRings.length > 0 ? redRings[0] : Infinity;
  const minYellow = yellowRings.length > 0 ? yellowRings[0] : Infinity;

  if (minRed === minYellow) {
    return "No points awarded";
  }

  if (minRed < minYellow) {
    const points = redRings.filter(dist => dist < minYellow).length;
    return `R: ${points}`;
  }

  if (minYellow < minRed) {
    const points = yellowRings.filter(dist => dist < minRed).length;
    return `Y: ${points}`;
  }

  return "No points awarded";
}
