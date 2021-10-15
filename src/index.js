// imports
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";
import { fetchMovies, submitForm } from "./movies";
import { initSortable } from "./plugins/init_sortable";

// Stimulus init
const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

// Selections
const form = document.querySelector('#search-form');

// Listenters
form.addEventListener('submit', submitForm);

// API calls
fetchMovies('harry potter');

// Plugins
initSortable();
