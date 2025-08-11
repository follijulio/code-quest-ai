/**
 * @param {Array} array
 * @param {string} property
 */

function groupByProperty(array, property) {
  const map = new Map();

  for (const element of array) {
    if (!map.get(element[property])) {
      map.set(element[property], element);
    } else {
      let arr = [];
      arr.push(map.get(element[property]));
      arr.push(element);
      map.set(element[property], arr);
    }
  }

  return Object.fromEntries(map);
}

function main() {
  console.log(
    groupByProperty(
      [
        { tipo: "A", valor: 1 },
        { tipo: "B", valor: 2 },
        { tipo: "A", valor: 3 },
      ],
      "tipo"
    )
  );
  console.log(
    groupByProperty(
      [{ cor: "azul" }, { cor: "vermelho" }, { cor: "azul" }],
      "cor"
    )
  );
  console.log(groupByProperty([], "x"));
  console.log(groupByProperty([{ id: 1 }, { id: 2 }], "id"));
  console.log(
    groupByProperty(
      [{ grupo: "g1" }, { grupo: "g2" }, { grupo: "g1" }, { grupo: "g2" }],
      "grupo"
    )
  );
}

main();
