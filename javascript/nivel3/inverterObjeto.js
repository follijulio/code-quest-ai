/**
 * @param {Object} obj
 */

function inverterObjeto(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const map = new Map();

  for (const i in keys) {
    map.set(values[i], keys[i]);
  }

  return Object.fromEntries(map);
}

function main() {
  console.log(inverterObjeto({ a: 1, b: 2, c: 3 }));
}

main();
