console.log("Hello from src/index.js!");

const button = document.querySelector('#click-me');

button.addEventListener('click', (event) => {
  console.log(event);

  console.log(event.currentTarget);

  // changes button text when clicked
  event.currentTarget.innerText = 'Hold still...';
  // first arg is the attr we wanna add the second is the value
  event.currentTarget.setAttribute("disabled", "tatchi");
});

const list = document.querySelector('#results');

// fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   .then(response => response.json())
//   .then((data) => {
//     data.Search.forEach((result) => {
//       const movieTag = `<li>
//         <img src="${result.Poster}" >
//         <p>${result.Title}</p>
//       </li>`;
//       results.insertAdjacentHTML("beforeend", movieTag);
//     });
//   });


const insertMovies = (data) => {
  data.Search.forEach((result) => {
    const movieTag = `<li>
      <img src="${result.Poster}" alt="" />
      <p>${result.Title}</p>
    </li>`;
    list.insertAdjacentHTML('beforeend', movieTag);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

fetchMovies('harry potter'); // on 1st page load

const form = document.querySelector('#search-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
});
