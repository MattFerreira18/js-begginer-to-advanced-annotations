const hour = -40;

// conditional structure
if (hour < 0) {
  const newHour = hour % 24;
  const positiveHour = newHour - 2 * newHour;

  if (positiveHour < 12 && positiveHour >= 6) {
    console.log('Bom Dia');
  } else if (positiveHour >= 12 && positiveHour <= 18) {
    console.log('Boa Tarde');
  } else if (positiveHour > 19 && positiveHour < 6) {
    console.log('Boa Noite');
  }
} else if (hour < 12 && hour >= 6) {
  // if hour < 12 and hora >= 6, do it
  console.log('Bom Dia');
} else if (hour >= 12 && hour <= 18) {
  console.log('Boa Tarde');
} else if (hour >= 24 > 18 || hour <= 0 < 6) {
  console.log('Boa Noite');
} else if (hour > 24) {
  const newHour = hour % 24;

  if (newHour < 12 && newHour >= 6) {
    console.log('Bom Dia');
  } else if (newHour >= 12 && newHour <= 18) {
    console.log('Boa Tarde');
  } else if (newHour > 19 && newHour < 6) {
    console.log('Boa Noite');
  }
} else {
  console.log('ERROR 404');
}
