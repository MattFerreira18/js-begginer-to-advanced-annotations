function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function sleep(msg, time, callback) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('bad value');
      return;
    }
    setTimeout(() => {
      resolve(`${msg} - a promise resolved`);
    }, time);
  });
}

// CALLBACK hells
// sleep(
//   'phrase1',
//   rand(1, 3, () => {
//     sleep(
//       'phrase2',
//       rand(1, 3, () => {})
//     );
//   })
// );

// THEN hells
// sleep('phrase 1', 1, rand(1, 3))
//   .then((resp) => {
//     console.log(resp);
//     return sleep(3.14, rand(1, 3));
//   })
//   .then((resp) => {
//     console.log(resp);
//     return sleep('phrase 3', rand(1, 3));
//   })
//   .then((resp) => console.log(resp))
//   .catch((e) => {
//     console.log(e);
//   });

//
// Promise.all Promise.race Promise.reject
//
const promises = [
  sleep('second promise', rand(1, 4)),
  sleep('third promise', rand(1, 4)),
  // sleep(1000),
  'first value',
  'another value',
];

Promise.all(promises)
  .then((value) => console.log(value))
  .catch((err) => console.log(err));

// shows only first resolved
Promise.race(promises)
  .then((value) => console.log(value))
  .catch((err) => console.log(err));

function downloadPage() {
  const cached = false;
  if (cached) {
    // return Promise.resolve('Page in cache');
    return Promise.reject('Page in cache');
  }
  return sleep('downloading the page', rand(1, 4));
}

downloadPage()
  .then((page) => console.log(page))
  .catch((err) => console.log('ERROR:', err));
