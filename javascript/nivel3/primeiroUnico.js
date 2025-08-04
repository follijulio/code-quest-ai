/**
 * @param {[]} arr
 */

function primeiroUnico(arr) {
  const map = new Map();

  for (const i of arr) {
    if (!map.has(i)) {
      map.set(i, 1);
    } else {
      map.set(i, map.get(i) + 1);
    }
  }

  for (const i of map) {
    if (i[1] === 1) {
      return i[0];
    }
  }

  return undefined;
}

function main() {
  console.log(primeiroUnico([2, 3, 4, 2, 3, 5]));
  console.log(primeiroUnico(["a", "b", "a", "c"]));
  console.log(primeiroUnico([1, 1, 1, 2, 2, 3]));
  console.log(primeiroUnico([7, 7, 7, 7]));
  console.log(primeiroUnico([]));
}

main();
