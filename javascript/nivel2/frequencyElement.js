/**
 * @param {Array} array
 */

function frequencyElement(array) {
  const map = new Map();

  for (element of array) {
    if (!map.get(element)) {
      map.set(element, 1);
    } else {
      map.set(element, map.get(element) + 1);
    }
  }

  const frequency = Object.fromEntries(map);
  return frequency;
}

function main() {
  console.log(frequencyElement([1, 2, 2, 3, 3, 3]));
  console.log(frequencyElement(["a", "b", "a", "c", "b"]));
  console.log(frequencyElement([]));
  console.log(frequencyElement([5, 5, 5, 5]));
  console.log(frequencyElement(["x"]));
}

main();
