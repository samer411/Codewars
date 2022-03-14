// function arrayDiff(a, b) {
//   let result = [];
//   for (let i of a) {
//     if (!b.includes(i)) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// Second Solution
function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}
