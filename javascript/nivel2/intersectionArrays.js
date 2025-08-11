/**
 * @param {[]} array1
 * @param {[]} array2
 */

function intersectionArrays(array1, array2) {
  let intercession = [];

  for (const index in array1) {
    if (
      array2.includes(array1[index]) &&
      !intercession.includes(array1[index])
    ) {
      intercession.push(array1[index]);
    }
  }
  return intercession;
}

function main() {
  console.log(intersectionArrays([1, 2, 3], [2, 3, 4]));
  console.log(intersectionArrays([1, 1, 2], [1, 2, 2]));
  console.log(intersectionArrays(["a", "b"], ["b", "c"]));
  console.log(intersectionArrays([5, 6], [7, 8]));
  console.log(intersectionArrays([], [1, 2, 3]));
}

main();
