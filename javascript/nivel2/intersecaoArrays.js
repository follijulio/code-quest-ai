/**
 * @param {[]} arr1
 * @param {[]} arr2
 */

function intersecaoArrays(arr1, arr2) {
  let arr = [];
  for (const i in arr1) {
    if (arr2.includes(arr1[i]) && !arr.includes(arr1[i])) {
      arr.push(arr1[i]);
    }
  }
  return arr;
}

function main() {
  console.log(intersecaoArrays([1, 2, 3], [2, 3, 4]));
  console.log(intersecaoArrays([1, 1, 2], [1, 2, 2]));
  console.log(intersecaoArrays(["a", "b"], ["b", "c"]));
  console.log(intersecaoArrays([5, 6], [7, 8]));
  console.log(intersecaoArrays([], [1, 2, 3]));
}

main();
