/**
 * @param {Array} arr
 */

function mapearPorDois(arr) {
  let a = [];
  for (const i of arr) {
    a.push(i * 2);
  }
  return a;
}

function main() {
  console.log(mapearPorDois([1, 2, 3]));
  console.log(mapearPorDois([0, -1, 5]));
  console.log(mapearPorDois([]));
  console.log(mapearPorDois([10]));
  console.log(mapearPorDois([-3, 3]));
}

main();
