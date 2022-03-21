// function duplicateEncode(word) {
//   word = word.toLowerCase();
//   let duplicates = [];
//   for (let i = 0; i < word.length; i++) {
//     for (let j = i + 1; j < word.length; j++) {
//       if (word[i] == word[j]) {
//         duplicates.push(word[i]);
//       }
//     }
//   }
//   let result = [];
//   for (let i of word) {
//     if (duplicates.includes(i)) {
//       result.push(")");
//     } else {
//       result.push("(");
//     }
//   }
//   return String(result.join(""));
// }

// ************ Second Solution **********
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function(e, i, a) {
      return a.indexOf(e) == a.lastIndexOf(e) ? "(" : ")";
    })
    .join("");
}
console.log(duplicateEncode("recede"));
