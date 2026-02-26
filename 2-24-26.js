function countBusinessDays(start, end) {

  const [sY, sM, sD] = start.split('-').map(Number);
  const [eY, eM, eD] = end.split('-').map(Number);

  let current = new Date(sY, sM - 1, sD);
  const endObject = new Date(eY, eM - 1, eD);
  
  let count = 0;

  while (current <= endObject) {
    const dayOfWeek = current.getDay();
    
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);

    if (!isWeekend) {
      count++;
    }

    current.setDate(current.getDate() + 1);
  }

  return count;
}
