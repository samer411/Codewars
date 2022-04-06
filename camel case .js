function toCamelCase(str) {
  if (str == "") return "";
  else {
    let r = str.split("_");
    if (r.length <= 1) {
      r = str.split("-");
    }
    for (let i = 1; i < r.length; i++) {
      let ch = str[i][0].toUpperCase();
      console.log(str[i]);
      console.log(ch);
      console.log(str[i].slice(1));
      str[i] = ch + str[i].slice(1);
      console.log(str[i]);
    }
    return r.join("");
  }
}

console.log(toCamelCase("the_stealth_warrior"));
