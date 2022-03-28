function persistence(num) {
  let ans = 0;
  while (num >= 10) {
    let temp = num;
    num = 1;

    while (temp > 0) {
      let digit = temp % 10;
      console.log(digit);
      temp = Math.floor(temp / 10);
      console.log(temp);
      num *= digit;
    }
    ans++;
  }
  return ans;
}
console.log(persistence(999));
