function alphabetPosition(text) {
  let result = [];
  text = text.toLowerCase();
  let all_letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let l of text) {
    if (all_letters.includes(l)) {
      result.push(all_letters.indexOf(l) + 1);
    }
  }

  return typeof result.join(` `);
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
