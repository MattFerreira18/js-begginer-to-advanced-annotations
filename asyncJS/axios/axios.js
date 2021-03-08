//AJAX with AXIOS

axios('main.json')
  .then((resp) => loadEls(resp.data))
  .catch((err) => console.log(err));

function loadEls(json) {
  const container = document.querySelector('.result');
  const table = document.createElement('table');

  for (const item of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = item.age;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = item.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = item.email;
    tr.appendChild(td);

    table.appendChild(tr);
    container.appendChild(table);
  }
}
