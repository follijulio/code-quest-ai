/**
 * @param {string} str 
 */

function ehPalindromo(str){
  const reverse = str.toLowerCase().split("").reverse().join("")

  return reverse === str.toLowerCase()
}

function main() {
  console.log(`true | ${ehPalindromo("Radar")}`)
  console.log(`false | ${ehPalindromo("A base do teto")}`)
  console.log(`true | ${ehPalindromo("Ana")}`)
  console.log(`true | ${ehPalindromo("")}`)
  console.log(`true | ${ehPalindromo("12321")}`)
}

main()