/**
 * @param {Array} arr
 */

function removerDuplicatas(arr) {
  let a = [];
  const map = new Map()
  for(i of arr){
    if(!map.get(i)){
      a.push(i)
      map.set(i, 1)
    }
  }


    return a;
  }

  function main() {
    console.log(removerDuplicatas([1, 2, 2, 3, 4, 4, 5]));
    console.log(removerDuplicatas(["a", "b", "a", "c"]));
    console.log(removerDuplicatas([5, 5, 5, 5]));
    console.log(removerDuplicatas([1, 2, 3, 1, 2]));
  }

  main();
