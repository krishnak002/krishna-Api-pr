const url = 'https://api.themoviedb.org/3/movie/now_playing';
const base_url = 'https://image.tmdb.org/t/p/w500/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTU3ZjVjYzI3NDQxNDkwYzRiNzBmMDhmZTlhZWFkMCIsIm5iZiI6MTc3MjUwOTQ3My44MTksInN1YiI6IjY5YTY1OTIxZmQ3Y2QwNTlkYjg2MmRlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UOdI32FJQdH85gbAjCglL20Y5s0jY8KKRMtzoSB1VW4'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => {
    showMovies(json.results)
  })
  .catch(err => console.error(err));
const showMovies = (list) => {
  displayMovie.innerHTML = "";

  list.forEach((movie) => {
    const { backdrop_path, title, overview, release_date } = movie;

    let col = document.createElement('div');
    col.classList.add('col-md-3','mt-4');

    col.innerHTML = `
      <div class="card h-100">
        <img src="${base_url + backdrop_path}" class="card-img-top" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <small><strong>release_date : </strong>${release_date}</small>
          <p class="card-text">${overview.substring(0, 100)}...</p>
          <a href="#" class="btn btn-primary btn-sm">Watch Online</a>
          <a href="#" class="btn btn-danger btn-sm">Download</a>
        </div>
      </div>
    `;

    displayMovie.appendChild(col);
  });
};