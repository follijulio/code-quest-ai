/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 * 
 */

function soma(a, b) {
  return a + b;
}

function main() {
  console.log(`5 | ${soma(2, 3)}`);
  console.log(`0 | ${soma(-1, 1)}`);
  console.log(`0 | ${soma(0, 0)}`);
  console.log(`0 | ${soma(10, -10)}`);
  console.log(`125 | ${soma(100, 25)}`);
}

main();
