/**
 * @param {Array} arr
 */

function maiorNumero(arr) {
  let r = 0;
  let m = 0;

  for (i of arr) {
    if (i > m || r == 0) {
      m = i;
    }
  }
  return m || undefined;
}

function main() {
  console.log(maiorNumero([1, 2, 3, 5, 5]));
  console.log(maiorNumero([-10, -5, -3]));
  console.log(maiorNumero([100]));
  console.log(maiorNumero([]));
  console.log(maiorNumero([7, 7, 7, 7]));
}

main();
