function tribonacci(signature, n) {
  if ((n = 0)) return [];
  else {
    let result = signature;
    for (let i = 0; i < n - 3; i++) {
      let next_item;
      for (let j = -1; j > -4; j--) {
        next_item += result[j];
      }
      console.log(next_item);
      result.push(next_item);
    }
    return result;
  }
}
console.log(tribonacci([1, 1, 1], 10));
