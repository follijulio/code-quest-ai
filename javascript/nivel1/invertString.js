/**
 * @param {string} string
 * @returns
 */

function invertString(string) {
  const inverted_string = string.split("").reverse().join("");
  return inverted_string;
}

function main() {
  console.log(invertString("casa"));
  console.log(invertString("JavaScript"));
  console.log(invertString(""));
  console.log(invertString("a"));
  console.log(invertString("12345"));
}

main();
