/**
 * @param {[]} A
 * @param {[]} B
 */

function naoInterseccao(A, B) {
  const arr = [];

  for (const i in A) {
    if (!B.includes(A[i])) {
      arr.push(A[i]);
    }
  }

  for (const i in B) {
    if (!A.includes(B[i])) {
      arr.push(B[i]);
    }
  }

  return arr;
}
function main() {
  console.log(naoInterseccao([1, 2, 3, 3], [3, 4, 9, 8, 9, 6]));
}

main();
