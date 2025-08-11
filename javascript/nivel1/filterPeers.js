/**
 * @param {Array} array
 */

function filterPeers(array) {
  let pairs = [];
  
  for (element of array) {
    if (element % 2 == 0) {
      pairs.push(element);
    }
  }
  return pairs;
}

function main() {
  console.log(filterPeers([1, 2, 3, 4, 5]));
  console.log(filterPeers([2, 4, 6]));
  console.log(filterPeers([1, 3, 5]));
  console.log(filterPeers([]));
  console.log(filterPeers([0, -2, 7, 8]));
}

main();
