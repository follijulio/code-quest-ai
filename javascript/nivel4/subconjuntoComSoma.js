/**
 * @param {[]} arr
 * @param {number} alvo
 */

function subconjuntoComSoma(arr, alvo) {
  let isPossible = false;

  for (const i in arr) {
    for (const j in arr) {
      if (arr[i] + arr[j] === alvo && i !== j) {
        return true;
      }
    }
  }

  return isPossible;
}

function main() {
  console.log("true | ", subconjuntoComSoma([1, 2, 3, 4], 6));
  console.log("false | ", subconjuntoComSoma([1, 2, 3, 4], 11));
  console.log("true | ", subconjuntoComSoma([5, 1, 5], 10));
  console.log("false | ", subconjuntoComSoma([2, 4, 6], 5));
  console.log("false | ", subconjuntoComSoma([], 0));
  console.log("false | ", subconjuntoComSoma([5], 10));
}

main();
