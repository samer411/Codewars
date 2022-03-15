// function findOutlier(integers) {
//   //your code here
//   let even_nums = [];
//   let odd_nums = [];
//   for (let num of integers) {
//     if (num % 2 == 0) {
//       even_nums.push(num);
//     } else {
//       odd_nums.push(num);
//     }
//   }
//   if (even_nums.length == 1) {
//     return parseInt(even_nums);
//   } else {
//     return parseInt(odd_nums);
//   }
// }

// ***************Second Solution***********
function findOutlier(integers) {
  let even = integers.filter((a) => a % 2 == 0);
  let odd = integers.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}
