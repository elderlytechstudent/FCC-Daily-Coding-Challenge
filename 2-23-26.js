function canDonate(donor, recipient) {
  const dRh = donor.slice(-1);
  const dType = donor.slice(0, -1);
  const rRh = recipient.slice(-1);
  const rType = recipient.slice(0, -1);

  const compatibility = {
    'O':  ['O', 'A', 'B', 'AB'],
    'A':  ['A', 'AB'],
    'B':  ['B', 'AB'],
    'AB': ['AB']
  };

  const rhPass = dRh === "-" || dRh === rRh;
  const typePass = compatibility[dType].includes(rType);

  return rhPass && typePass;
}
