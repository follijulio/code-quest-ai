/**
 @param {Object} obj
 */

function somaValoresObjeto(obj) {
  return Object.values(obj).reduce((a, b) => a + b, 0);
}

function main() {
  console.log(somaValoresObjeto({ a: 1, b: 2, c: 3 }));
  console.log(somaValoresObjeto({}));
  console.log(somaValoresObjeto({ x: 10, y: -5, z: 2 }));
  console.log(somaValoresObjeto({ a: 0 }));
  console.log(somaValoresObjeto({ a: 100, b: 25, c: -50 }));
}

main();
