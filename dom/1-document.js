// DOM -> Document Object Model
// works in tree's model

const { doc } = require('prettier');

// get HTML element
document.querySelector(''); // id or class
document.querySelectorAll(''); // get all id or class
document.getElementById(''); // get only id
document.getElementsByClassName(''); // get only class
document.getElementsByTagName(''); // get only html tag

// search in browser
const link = document.location.href; // shows the address page
const url = document.URL; // shows the address page
const t = document.title; // title page
const f = document.forms; // form
const i = document.images; // images

// manipuling content
const el = document.querySelector('.el');
el.textContent; // change the text
el.innerText;
el.innerHTML;
el.value; // valid only inputs

// change css styles
// el.style.property
el.classList; // return the element attribute
el.classList.add(''); // add class attribute
el.classList.remove(''); // remove class attribute
el.classList.toggle(''); // toogle class attribute

// search betweeen elements
// children
el.childNodes; // nodeList
el.children[0]; // html colletion
el.childElementCount; // count the els
el.firstChild;
el.lastChild;
el.removeChild(''); // remove a child

// parents
el.parentElement;
el.parentNode;

// siblings (brothers)
el.nextSibling;
el.nextElementSibling;
el.previousSibling;
el.previousElementSibling;

// create els
document.createElement('');
document.insertBefore('');
document.insertAfter('');
document.append('');
document.appendChild('');

// working with els properties
document.getAttribute();
document.setAttribute();
document.removeAttribute();

// events
// load, click, scroll, change, submit, transition, transitionend, keydown, keyup, keypress
document.addEventListener('mouse', (event) => {
  event.preventDefault(); // not reload page after button click
  event.id;
  event.className;
});

// obs: to convert NodeList in Array, use: Array.from();
