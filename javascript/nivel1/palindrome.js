/**
 * @param {string} string
 */

function isPalindrome(string) {
  const reverse = string.toLowerCase().split("").reverse().join("");

  return reverse === string.toLowerCase();
}

function main() {
  console.log(isPalindrome("Radar"));
  console.log(isPalindrome("A base do teto"));
  console.log(isPalindrome("Ana"));
  console.log(isPalindrome(""));
  console.log(isPalindrome("12321"));
}

main();
