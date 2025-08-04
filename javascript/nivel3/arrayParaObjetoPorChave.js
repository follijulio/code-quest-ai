/**
 * @param {Object[]} arr
 * @param {string} chave
 */

function arrayParaObjetoPorChave(arr, chave) {
  const map = new Map();
  for (const i of arr) {
    map.set(i[chave], i);
  }

  return Object.fromEntries(map);
}


function main() {
  console.log(
    arrayParaObjetoPorChave(
      [
        { id: 1, nome: "Ana" },
        { id: 2, nome: "Bia" },
      ],
      "id"
    )
  );
  console.log(
    arrayParaObjetoPorChave(
      [
        { codigo: "a", valor: 10 },
        { codigo: "b", valor: 20 },
      ],
      "codigo"
    )
  );
  console.log(arrayParaObjetoPorChave([], "id"));
  console.log(arrayParaObjetoPorChave([{ nome: "João" }], "nome"));
  console.log(
    arrayParaObjetoPorChave(
      [
        { a: 1, b: 2 },
        { a: 3, b: 4 },
      ],
      "a"
    )
  );
}

main();
