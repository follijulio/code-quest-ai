/**
 * @param {Array} arr
 */

function filtrarPares(arr) {
  let pares = [];
  for (i of arr) {
    if (i % 2 == 0) {
      pares.push(i);
    }
  }
  return pares;
}

function main() {
  console.log(filtrarPares([1, 2, 3, 4, 5]));
  console.log(filtrarPares([2, 4, 6]));
  console.log(filtrarPares([1, 3, 5]));
  console.log(filtrarPares([]));
  console.log(filtrarPares([0, -2, 7, 8]));
}

main();
