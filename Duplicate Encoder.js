function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .sort()
    .match(/(.)\1+/g);
}
console.log(duplicateEncode("Success"));
