//! NÃO FUNCIONAL

// /**
//  * @param {[]} labirinto
//  */

// function caminhoLabirinto(labirinto) {
//   let is = true;

//   for (let l = 0; l < labirinto.length; l++) {
//     for (let c = 0; c < labirinto[0].length; c++) {
//       if (
//         labirinto[l + 1][c] === 1 &&
//         labirinto[l][c + 1] === 1 &&
//         labirinto[l - 1][c - 1] === 1 &&
//         labirinto[l + 1][c] !== undefined
//       ) {
//         return false;
//       }
//     }
//   }
//   return is;
// }

// function main() {
//   console.log(
//     caminhoLabirinto([
//       [0, 0, 1],
//       [1, 0, 1],
//       [1, 0, 0],
//     ])
//   );
// }

// main();
