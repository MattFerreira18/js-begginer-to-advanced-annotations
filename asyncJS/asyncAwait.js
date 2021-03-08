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

(async function exec() {
  try {
    const v1 = await sleep('first level', rand(1, 4));
    console.log(v1);
    const v2 = await sleep('second level', rand(1, 4));
    console.log(v2);
    const v3 = await sleep('third level', rand(1, 4));
    console.log(v3);
  } catch (err) {
    console.log('ERROR:', err);
  }
})();

// sleep('first level', rand(1, 4));
// sleep('second level', rand(1, 4));
// sleep('third level', rand(1, 4));
