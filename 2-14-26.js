function getDifficulty(track) {

  let count = 0;

  for (let i = 0; i < track.length; i++) {
    const current = track[i];
    const previous = track[i - 1];

    if (current === "L" || current === "R") {
      if (previous && previous !== "S" && previous !== current) {
        count += 15;
      } else {
        count += 5;
      }
    }
  }

  if (count <= 100) return "Easy";
  if (count <= 200) return "Medium";
  return "Hard";
}
