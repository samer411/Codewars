// var countBits = function(n) {
//   // Program Me
//   let binary = n.toString(2);
//   let result = 0;
//   for (n of binary) {
//     if (n == 1) {
//       ++result;
//     }
//   }
//   return result;
// };

// ************Second Solution************

countBits = (n) =>
  n
    .toString(2)
    .split(0)
    .join("").length;
