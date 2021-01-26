let input =
  'Мне не удобно. Перенесите пожалуйста запись на субботу или 26(ое) 27(ое) с 14(и)00(и) до 16(и)15(и).';
let parsedInput = [];

parsedInput = input.toLowerCase().split(' ');

function f(x) {
  if (
    x.includes('понедельн') ||
    x.includes('вторник') ||
    x.includes('среду') ||
    x.includes('среда') ||
    x.includes('четверг') ||
    x.includes('пятниц') ||
    x.includes('суббот') ||
    x.includes('воскресен')
  ) {
    return x;
  } else if (x.includes('(ое)')) {
    return x;
  } else if (x.includes('(и)')) {
    return x;
  }
}

let cleanedArr = parsedInput.filter((item) => f(item));
console.log(cleanedArr);
