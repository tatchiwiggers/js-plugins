# JAVASCRIPT PLUGINS
Plugin é código, ou seja um script específico para uma função qualquer. As bibliotecas são scrips
com varias funções de dela extraimos a funcção que querermos... o plugin é mais especifco e mtas
vezes um plugin nos proporcina algumas opções de customização e implementação, facilitando as vidas
dos devs mundo a para que eles não precisem escrever um código do zero.

# WORKING WITH MULTIPLE FILES
Mas antes de falarmos de plugins, vamos falar sobre responsabilidades, vamos aprender como separar
nosso codigo em arquivos diferentes.

# MOVIE SEARCH - Yesterday we coded this
Na aula de ontem, vocês fizeram isso - mostrar o localhost
Search - batman
certo?

***Motrar no codigo como está tudo num so arquivo index.js***

Então vamos reorganizar nosso codigo!

# SEPARATE CONCERNS
Write functions in separate files
Vocês se lembram da epoca do cookbook e FD? A maneira em separávamos os arquivos?
imaginem se vc colocassem todo aquele codigo num arquibo so?
seria uma bagunça certo? a ideia aqui é a mesma.. hj temos aqui um projeto pequeno
mas qd os projetos são grandes, como por exempl CB e FD...  faz toda a diferença

# ONE ENTRY FILE
como devemos separar aqui?

const list = document.querySelector('#results');

***essa func cria um list item e injeta nossa lista no HTML***
const insertMovies = (data) => {
  data.Search.forEach((result) => {
    const movie = `<li>
      <img src="${result.Poster}" alt="" />
      <p>${result.Title}</p>
    </li>`;
    list.insertAdjacentHTML('beforeend', movie);
  });
};
***request para pegar p json - aqui fazemos uma requisição para a url abaixo***
***dps transformamos o que recebemos em um objeto JS***
***para depois inserir os movies com o resultado que temos utilizando a func insertMovies. ***
const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

***NO NOSSO INDEX ENTÃO AGORA TEMOS:***

fetchMovies('harry potter'); // on 1st page load

const list = document.querySelector('#results');
const form = document.querySelector('#search-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
});

VAMOS ENTÃO CRIAR UM ARQUIVO CHAMADO src/movies.js E PASSAR ESSE CODIGO PRA LÁ

# PROBLEM
mostrar console:
Uncaught ReferenceError: fetchMovies is not defined
 ### Webpack has a modular approach to front-end development
PRECISAMOS LINKAR O NOSSO ARQUIVO MOVIES C INDEX

# ES6 EXPORT
Export the function you call in src/index.js:
adicionar:
// src/movies.js

// [...]

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

`export { fetchMovies }; // <-- Add this line`

# ES6 IMPORT
Import the function you call in src/index.js:
adicionar:
`import { fetchMovies } from './movies'; // <-- add this line`

fetchMovies('harry potter');

const list = document.querySelector('#results');
const form = document.querySelector('#search-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
});

# MULTIPLE EXPORTS
Mas percebam que aqui no meu index.js ainda tem uma função... alguem
consegue me dizer qual é?
é ma função sem nome mas é uma função!!
Entao vamos mandar essa func la pro nosso movies.js

form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
});

agora fica assim no index.js
form.addEventListener('submit', submitForm);

`=========================================================`
o que essa função faz? Então vamos chamá-la de submmit form:

const submitForm = (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
};

e agora, precisamos exportá-la, certo?
export { fetchMovies, submitForm };
tambem importá-la?
import { fetchMovies, submitForm } from './movies';

# GENERAL RULES -REGRA GERAL
read in portuguese

# PLUGINS
Agora vamos ao que interessa!

# PACKAGE REPOSITORY

# SETUP

# ADDING A NEW PACKAGE

# OUR FIRST JS PLUGIN

# SORTABLE JS
A plugin to drag-and-drop items in a list

# ADDING OPTIONS
Sortable.create(list, {
  ghostClass: "ghost",
  animation: 150,
  onEnd: (event) => {
    alert(`${event.oldIndex} moved to ${event.newIndex}`);
  }
});

# JQUERY DEPENDENT PLUGINS

# SOLVED IE COMPATIBILITY ISSUES

# BECAME REDUNDANT IN THE MODERN JS ECOSYSTEM

# UNDERSTAND THE SYNTAX
EXPLAIN BOTH CODES

# Some plugins still depend on $ (Select2)
Know how to use them. Don't write your own
DOM manipulation scripts with $

# KEEPING A GOOD STYLE

# IN THE ENTRY FILE
EXPLAIN SLIDE

# IN OTHER FILES
explain slide

# STIMULUS JS

# STIMULUS JS
A modest Javascript framework for the HTML you already have

# Let's take this familiar example:
<head>
  <!-- ... -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <!-- ... -->
</head>
<body>
  <button id="clickme" class="btn btn-primary btn-lg">
    Click me!
  </button>
</body>

# THE OLD VANILLA JS WAY

# LET'S CODE IT WITH STIMULUS JS!

# STIMULUS INSTALLATION

# STIMULUS CONTROLLER

# DATA CONTROLLER
add this to html
<button class="btn btn-primary btn-lg" data-controller="disable-button">
Notice the naming convention 👌 

# CALLBACK
this.element refers to the element with data-controller

# What if we want to restore the button's initial state with a reset link?