/**
 * @param {string} str
 */

function verificarPalindromo(str) {
  let s = str
    .normalize("NFD") // ROUBADO
    .replace(/[\u0300-\u036f]/g, "") // ROUBADO
    .replace(/[^a-zA-Z0-9]/g, "") // ROUBADO
    .toLowerCase();

  let r = s.split("").reverse().join("");

  return r === s;
}

function main() {
  console.log(verificarPalindromo("LAPADA SECA"));
  console.log(verificarPalindromo("Socorram-me subi no ônibus em Marrocos"));
}

main();
