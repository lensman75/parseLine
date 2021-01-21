let str = `Мне не удобно. Перенесите пожалуйста запись на субботу или 26(ое) 27(ое) с 14(и)00 до 16(и)15(и).`;

let strArr = [];

strArr = str.split(' ');

console.log(strArr);

function filterStrArr(word) {
  switch (word) {
    case word.includes('суббот') === true:
      return word;
    // default:
    //   return;
  }
}

let filteredArr = strArr.filter('запись');

console.log(filteredArr);
