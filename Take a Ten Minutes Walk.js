function isValidWalk(walk) {
  let count = 0;
  if (walk.length != 10) {
    return false;
  } else {
    for (let i of walk) {
      if (i == "n" || i == "e") {
        count++;
      }
      if (i == "s" || i == "w") {
        count--;
      }
    }
  }
  return count == 0 ? true : false;
}
console.log(isValidWalk(["n", "s", "n", "s", "s", "s", "n", "s", "n", "s"]));
