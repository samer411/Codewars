function duplicateCount(text) {
  text = text.toLowerCase();
  let result = 0;
  text.filter((e) => if(text.count(e) > 1)
  { ++result });
  return result;
}
console.log(duplicateCount("abBcde"));
