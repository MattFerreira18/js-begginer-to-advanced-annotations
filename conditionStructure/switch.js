const date = new Date();
const weekday = date.getDay();
let weekdayText;

switch (weekday) {
  case 0:
    weekdayText = 'Domingo';
    break;
  case 1:
    weekdayText = 'Segunda';
    break;
  case 2:
    weekdayText = 'Terça';
    break;
  case 3:
    weekdayText = 'Quarta';
    break;
  case 4:
    weekdayText = 'Quinta';
    break;
  case 5:
    weekdayText = 'Sexta';
    break;
  case 6:
    weekdayText = 'Sábado';
    break;
  default:
    weekdayText = '';
    break;
}

console.log(weekdayText);
