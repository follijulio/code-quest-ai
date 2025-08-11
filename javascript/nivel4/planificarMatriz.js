/**
 * @param {[]} matriz
 * @returns {[]}
 */

function planificarMatriz(matriz) {
  let a = [];

  for (const i of matriz) {
    if (typeof i == "object") {
      for (const j of i) {
        a.push(j);
      }
    } else {
      a.push(i);
    }
  }

  if (a.some(Array.isArray)) {
    b = planificarMatriz(a);
    return b;
  }
  return a;
}

function main() {
  console.log(
    planificarMatriz([
      [1, 2],
      [3, 4],
    ])
  );
  console.log(planificarMatriz([[1], [2], [3]]));
  console.log(planificarMatriz([[], [1, 2], []]));
  console.log(planificarMatriz([]));
  console.log(planificarMatriz([[1, [2, 3]], [4]]));
  console.log(planificarMatriz([[1, 2, 3]]));
}

main();
