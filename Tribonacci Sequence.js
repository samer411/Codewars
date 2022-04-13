function tribonacci(signature, n) {
  let result = signature;
  for (let i = 0; i < n - 3; i++) {
    let next_item = 0;
    for (let j = 1; j > 4; j++) {
      // next_item += result[result.length - j];
      // console.log(next_item);
      console.log(result[result.length() - j]);
    }
  }
}
console.log(tribonacci([1, 1, 1], 10));
