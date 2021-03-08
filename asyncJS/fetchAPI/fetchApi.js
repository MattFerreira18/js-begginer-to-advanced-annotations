// AJAX with FETCH API

/* HTTP Methods:
GET
POST
PUT
PATCH
DELETE
*/

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
    const response = await fetch(href);
    const html = await response.text();
    loadResult(html);
  } catch (err) {
    console.log('ERROR: ', err);
  }
}

function loadResult(responseText) {
  const result = document.querySelector('.result');
  result.innerHTML = responseText;
}
