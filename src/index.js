import { definitionsFromContext } from "stimulus/webpack-helpers";
import { Application } from "stimulus";
import { fetchMovies, submitForm } from './movies';
import { initSortable } from './plugins/init_sortable';

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

fetchMovies('harry potter'); // on 1st page load
initSortable();

const form = document.querySelector('#search-form');

form.addEventListener('submit', submitForm);

fetchMovies('harry potter');
