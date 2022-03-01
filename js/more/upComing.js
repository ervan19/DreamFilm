const IMAGEBASEURL = "https://image.tmdb.org/t/p/w500";

function getUpcomingMovies() {
  fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=b9b6aeb3b55201c50bafd1254bcacc66&language=en-US&page=1`
  )
    .then((response) => response.json())
    .then((data) => {
      const results = data.results;
      showUpComingMovies(results);
    });
}
function showCards(m) {
  const year = new Date(m.release_date).getFullYear();

  return `
        <div class="card ">
        <img src="${IMAGEBASEURL}/${m.poster_path}" class="card-img">
        <div class="card-title">
        <h3 class="title">${m.title}</h3>
        <h4 class="year">${year}</h4>
        </div>
        <div class="card-content">
        <div class="content-left">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-star" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <h3>${m.vote_average}</h3>
        </div>
        <div class="content-right">
        <a href="/detailMovie.html?id=${m.id}" class="showDetail" data-imdbid="${m.id}">Show Detail <svg xmlns="http://www.w3.org/2000/svg" class="icon-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg></a>
    
        </div>
        </div>
        <div class="overlay"></div>
        </div>
        `;
}

const showUpComingMovies = (movies) => {
  let movieCards = "";
  const upComingMovies = document.querySelector(".upComingMovies");
  movies.forEach((m) => (movieCards += showCards(m)));
  upComingMovies.innerHTML = movieCards;
};

window.addEventListener("DOMContentLoaded", () => {
  getUpcomingMovies();
});
