function tribonacci(signature, n) {
  let add, inc;
  let seq = [];

  if (n < 1) {
    return [];
  }

  if (n < signature.length) {
    return signature.slice(0, n);
  }

  inc = 0;
  seq = signature.slice(0);

  while (inc <= n) {
    add = seq.slice(inc, inc + 3).reduce((a, b) => b + a, 0);
    seq.push(add);
    inc += 1;
  }

  return seq.slice(0, n);
}

console.log(tribonacci([1, 1, 1], 10));
