let input1 =
  'Мне не удобно. Перенесите пожалуйста запись на субботу или 26(ое) 27(ое) с 14(и)00(и) до 16(и)15(и).';
let input2 =
  'Мне не удобно. Перенесите пожалуйста запись на следующую неделю, среда или четверг с 14(и)00 до 16(и)15(и)';
let input3 =
  'Мне не удобно. Перенесите пожалуйста запись на 15(ое) февраля с 14(и)00(и) до 16(и)15(и)';
let input4 =
  'Мне не удобно. Перенесите пожалуйста запись на среду с 12(и)15(и) до 15(и)30(и) или пятницу с 19(и)25(и) до 20(и)45(и)';
let parsedInput = [];

parsedInput = input3.toLowerCase().split(' ');

function f(x) {
  if (
    x.includes('понедельн') ||
    x.includes('вторник') ||
    x.includes('среду') ||
    x.includes('среда') ||
    x.includes('четверг') ||
    x.includes('пятниц') ||
    x.includes('суббот') ||
    x.includes('воскресен') ||
    x.includes('следующ') ||
    x.includes('недел') ||
    x.includes('январ') ||
    x.includes('феврал') ||
    x.includes('март') ||
    x.includes('апрел') ||
    x.includes('мая') ||
    x.includes('май') ||
    x.includes('июн') ||
    x.includes('июл') ||
    x.includes('август') ||
    x.includes('сентябр') ||
    x.includes('октябр') ||
    x.includes('ноябр') ||
    x.includes('декабр')
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

let preformatedArr = [];

function formatDayMonthDate(arr) {
  let x = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('понедельн')) {
      x.push({ day: 'monday' });
    }
    if (arr[i].includes('вторник')) {
      x.push({ day: 'tuesday' });
    }
    if (arr[i].includes('среда') || arr[i].includes('среду')) {
      x.push({ day: 'wednesday' });
    }
    if (arr[i].includes('четверг')) {
      x.push({ day: 'thursday' });
    }
    if (arr[i].includes('пятниц')) {
      x.push({ day: 'friday' });
    }
    if (arr[i].includes('суббот')) {
      x.push({ day: 'saturday' });
    }
    if (arr[i].includes('воскресен')) {
      x.push({ day: 'sunday' });
    }
    if (arr[i].includes('(ое)')) {
      let day = Number(arr[i].split('(ое)').filter(Number));
      x.push({ date: day });
    }
    if (arr[i].includes('(и)')) {
      let time = arr[i].split('(и)').filter(Number).join(':');
      if (time.length < 3) {
        time += ':00';
      }
      x.push({ time: time });
    }
    if (arr[i].includes('следующ') && arr[i + 1].includes('недел')) {
      x.push({ week: 'next' });
    }
    if (arr[i].includes('январ')) {
      x.push({ month: 'january' });
    }
    if (arr[i].includes('феврал')) {
      x.push({ month: 'february' });
    }
    // TODO: Add more months.
  }
  return x;
}

preformatedArr = formatDayMonthDate(cleanedArr); //?
