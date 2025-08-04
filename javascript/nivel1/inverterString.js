/**
 * @param {string} str
 * @returns
 */

function inverterString(str) {
  return str.split("").reverse().join("");
}

function main() {
  console.log(`asac | ${inverterString("casa")}`);
  console.log(`tpircSavaJ | ${inverterString("JavaScript")}`);
  console.log(` | ${inverterString("")}`);
  console.log(`a | ${inverterString("a")}`);
  console.log(`54321 | ${inverterString("12345")}`);
}

main();
