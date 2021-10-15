const list = document.querySelector('#results');

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

const submitForm = (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
};


export { fetchMovies, submitForm };
