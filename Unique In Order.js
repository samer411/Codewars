let uniqueInOrder = function(iterable) {
  result = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i + 1]) {
      result.push(iterable[i]);
    } else if (i == iterable.length - 1) {
      result.push(iterable[i]);
    }
  }
  return result;
};
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
