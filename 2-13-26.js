function getFastestSpeed(times) {

const segments = [320, 280, 350, 300, 250];

const best = times.reduce((max, time, i) => {
    const speed = segments[i] / time;
    return speed > max.speed ? { speed, segment: i + 1 } : max;
  }, { speed: 0, segment: 0 });

return `The luger's fastest speed was ${best.speed.toFixed(2)} m/s on segment ${best.segment}.`;
}
