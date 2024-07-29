export default function cleanSet(set, startString) {
  let res;
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  res = Array.from(set).filter((word) => typeof word === 'string' && word.startsWith(startString));
  res = res.map((word) => word.slice(startString.length));
  return res.join('-');
}
