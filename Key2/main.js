// получение дня недели по дате
function getDayOfWeek(day, month, year) {
  const date = new Date(year, month - 1, day);
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return days[date.getDay()];
}

// проверка на високосный год
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// вычисление возраста
function calculateAge(day, month, year) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

// Функция для отображения цифр *
function displayNumberWithStars(number, digits) {
  const digitPatterns = {
    0: ['***', '* *', '* *', '* *', '***'],
    1: ['  *', '  *', '  *', '  *', '  *'],
    2: ['***', '  *', '***', '*  ', '***'],
    3: ['***', '  *', '***', '  *', '***'],
    4: ['* *', '* *', '***', '  *', '  *'],
    5: ['***', '*  ', '***', '  *', '***'],
    6: ['***', '*  ', '***', '* *', '***'],
    7: ['***', '  *', '  *', '  *', '  *'],
    8: ['***', '* *', '***', '* *', '***'],
    9: ['***', '* *', '***', '  *', '***']
  };

  
  const numStr = String(number).padStart(digits, '0');
  
  
  const starLines = [];
  for (let i = 0; i < 5; i++) {
    let line = '';
    for (const digit of numStr) {
      line += digitPatterns[digit][i] + ' ';
    }
    starLines.push(line);
  }
  
  return starLines.join('\n');
}

// Функция для создания даты *
function formatDateWithStars(day, month, year) {
  const dayStars = displayNumberWithStars(day, 2);
  const monthStars = displayNumberWithStars(month, 2);
  const yearStars = displayNumberWithStars(year, 4);
  

  const dayLines = dayStars.split('\n');
  const monthLines = monthStars.split('\n');
  const yearLines = yearStars.split('\n');
  
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += dayLines[i] + ' ' + monthLines[i] + ' ' + yearLines[i] + '\n';
  }
  
  return result;
}

// Вывод
function main() {
  const day = parseInt(prompt('Введите день вашего рождения (1-31):'));
  const month = parseInt(prompt('Введите месяц вашего рождения (1-12):'));
  const year = parseInt(prompt('Введите год вашего рождения:'));
  
  console.log(`\nДата рождения: ${day}.${month}.${year}`);
  console.log(`День недели: ${getDayOfWeek(day, month, year)}`);
  console.log(`Год ${isLeapYear(year) ? 'високосный' : 'не високосный'}`);
  console.log(`Вам сейчас ${calculateAge(day, month, year)} лет\n`);
  
  console.log('Дата рождения в формате табло:');
  console.log(formatDateWithStars(day, month, year));
}

// 
main();