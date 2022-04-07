function toCamelCase(str) {
  if (str == "") return "";
  else {
    let r = str.split("_");
    if (r.length <= 1) {
      r = str.split("-");
    }
    for (let i = 1; i < r.length; i++) {
      let ch = r[i][0].toUpperCase();
      r[i] = ch + r[i].slice(1);
    }
    return r.join("");
  }
}

console.log(toCamelCase("the-stealth-warrior"));
