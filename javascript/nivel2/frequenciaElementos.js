/**
 * @param {Array} arr
 */

function frequenciaElementos(arr) {
  const map = new Map();
  for (i of arr) {
    if (!map.get(i)) {
      map.set(i, 1);
    } else {
      map.set(i, map.get(i) + 1);
    }
  }
  const obj = Object.fromEntries(map);
  return obj
}

function main() {
  console.log(frequenciaElementos([1, 2, 2, 3, 3, 3]));
  console.log(frequenciaElementos(["a", "b", "a", "c", "b"]));
  console.log(frequenciaElementos([]));
  console.log(frequenciaElementos([5, 5, 5, 5]));
  console.log(frequenciaElementos(["x"]));
}

main();
