function isValidWalk(walk) {
  let ns = [];
  let ss = [];
  let ws = [];
  let es = [];
  if (walk.length != 10) {
    return false;
  } else {
    for (let i of walk) {
      if (i == "n") {
        ns.push("n");
      } else if (i == "s") {
        ss.push("s");
      } else if (i == "w") {
        ws.push("w");
      } else if (i == "e") {
        es.push("e");
      }
    }
  }
  return ns.length == ss.length && es.length == ws.length ? true : false;
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
