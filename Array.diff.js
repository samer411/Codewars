function arrayDiff(a, b) {
  let result = [];
  for (let i of a) {
    if (!b.includes(i)) {
      result.push(i);
    }
  }

  return result;
}
