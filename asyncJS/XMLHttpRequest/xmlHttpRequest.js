// AJAX with XMLHttpRequest

/* HTTP Methods:
GET
POST
PUT
PATCH
DELETE
*/

const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // verb, url, assync?
    xhr.open(obj.method, obj.url, true);

    //in post method
    xhr.send();

    xhr.addEventListener('load', () => {
      if (200 <= xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        obj.error({
          code: xhr.status,
          msg: xhr.statusText,
        });
        reject(xhr.status);
      }
    });
  });
};

document.addEventListener('click', (e) => {
  const target = e.target.tagName.toLowerCase();
  if (target === 'a') {
    e.preventDefault();
    loadPage(e.target);
  }
});

async function loadPage(el) {
  const href = el.getAttribute('href');
  try {
    const response = await request({
      method: 'GET',
      url: href,
    });

    loadResult(response);
  } catch (err) {
    console.log(err);
  }
}

function loadResult(responseText) {
  const result = document.querySelector('.result');
  result.innerHTML = responseText;
}
