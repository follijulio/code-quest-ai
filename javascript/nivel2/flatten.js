/**
 * @param {Array} arr
 */

function flatten(arr) {
  let a = [];
  for (i of arr) {
    if (typeof i == "object") {
      o = i;
      for (n of o) {
        a.push(n);
      }
    } else {
      a.push(i);
    }
  }

  return a;
}

function main() {
  console.log(flatten([1, [2, 3], 4]));
  console.log(flatten([[1, 2], [3, 4]]	));
  console.log(flatten([1, 2, 3]));
  console.log(flatten([[]]));
  console.log(flatten([1, [2, [3]]]));
}
main();
