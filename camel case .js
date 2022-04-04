function toCamelCase(str) {
  if (str.length == 0) return str;
  else {
    let r1 = str.split("-");

    if (r1.length > 1) {
      for (word of r1) {
        word.charAt(0).toUpperCase();
      }
      return r1.join("");
    } else {
      let r2 = str.split("_");
      console.log(r2);
      for (let i = 1; i < r2.length; i++) {
        r2[i][0].toUpperCase();
        console.log(r2[i][0].toUpperCase());
      }
      return r2.join("");
    }
  }
}

console.log(toCamelCase("the_stealth_warrior"));
