/**
 * @param {Object[]} arr
 * @param {string} propriedade
 */

function agruparPorPropriedade(arr, propriedade) {
  const map = new Map();
  for (const i of arr) {
    if (!map.get(i[propriedade])) {
      map.set(i[propriedade], i);
    } else {
      let a = [];
      a.push(map.get(i[propriedade])).p;
      a.push(i);
      map.set(i[propriedade], a);
    }
  }

  return Object.fromEntries(map);
}

function main() {
  console.log(
    agruparPorPropriedade(
      [
        { tipo: "A", valor: 1 },
        { tipo: "B", valor: 2 },
        { tipo: "A", valor: 3 },
      ],
      "tipo"
    )
  );
  console.log(
    agruparPorPropriedade(
      [{ cor: "azul" }, { cor: "vermelho" }, { cor: "azul" }],
      "cor"
    )
  );
  console.log(agruparPorPropriedade([], "x"));
  console.log(agruparPorPropriedade([{ id: 1 }, { id: 2 }], "id"));
  console.log(
    agruparPorPropriedade(
      [{ grupo: "g1" }, { grupo: "g2" }, { grupo: "g1" }, { grupo: "g2" }],
      "grupo"
    )
  );
}

main();
