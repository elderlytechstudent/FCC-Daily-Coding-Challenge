function getHillRating(drop, distance, type) {
  let steepness = drop/distance;

  if (type === "Downhill") steepness *= 1.2;
  if (type === "Slalom") steepness *= 0.9;

  if (steepness <= 0.1) return "Green";
  if (steepness <= 0.25) return "Blue";

  return "Black";
}
