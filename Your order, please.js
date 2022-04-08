function order(words) {
  let arr = words.split(" ");
  let result = [];
  for (word of arr) {
    for (letter of word) {
      if (!isNaN(letter)) {
        result[letter - 1] = word;
      }
    }
  }
  return result.join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));
