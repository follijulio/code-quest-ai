/**
 * @param {number} n
 */

function sequenciaFibonacci(n) {
  let f = [];

  for (let i = 0; i < n; i++) {
    if (i >= 2) {
      let s = f[i - 2] + f[i - 1];
      f.push(s);
    }
    if (i === 1) {
      f.push(1);
    }
    if (i === 0) {
      f.push(0);
    }
  }
  return f;
}

function main() {
  console.log(sequenciaFibonacci(1));
  console.log(sequenciaFibonacci(2));
  console.log(sequenciaFibonacci(5));
  console.log(sequenciaFibonacci(7));
  console.log(sequenciaFibonacci(0));
}

main();
