// console.log(infoUrl);
const IMAGEBASEURL = "https://image.tmdb.org/t/p/w500";

function getDetailMovies(imbdid) {
  return fetch(
    "https://api.themoviedb.org/3/movie/" +
      imbdid +
      "&query?api_key=b9b6aeb3b55201c50bafd1254bcacc66&language=en-US"
  )
    .then((response) => response.json())
    .then((data) => data);
}

function getGenres(m) {
  let genresArr = m.genres;
  let genres = Object.keys(genresArr).map(function (key) {
    return genresArr[key].name;
  });
  genres.forEach((m) => {
    return `${m}`;
  });
  return genres;
}

function showSectionDetail(m) {
  const genres = getGenres(m);
  const year = new Date(m.release_date).getFullYear();
  let popularity = m.popularity;
  let popularityRound = Math.ceil(popularity);
  return `
    <div class="detail-container">
      <div class="detail-img">
          <img src="${IMAGEBASEURL}/${m.poster_path}" alt="">
      </div>
      <div class="detail-movie">
          <h1>${m.title} (${year})</h1>
          <h2 class="runtime">Runtime : <strong>${m.runtime} minutes</strong><svg xmlns="http://www.w3.org/2000/svg" class="icon-clock" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg></h2>
          <h2>Status : <strong>${m.status}</strong></h2>
          <h2 id="genres">Genres : <strong>${genres} </strong></h2>
          <h2>Release Date : <strong>${m.release_date}</strong></h2>
          <h2 class="popularity">Popularity : <strong>${popularityRound} </strong><svg xmlns="http://www.w3.org/2000/svg" class="icon-user" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg></h2>
          <h2>Overview : ${m.overview}</h2>
          <h2 class="tagline"><strong>"${m.tagline}"</strong></h2>
      </div>
      </div>
      `;
}

document.addEventListener("DOMContentLoaded", async function (e) {
  let urlParams = new URLSearchParams(document.location.search);
  let infoUrl = urlParams.get("id");
  const detailMovie = await getDetailMovies(infoUrl);
  updateUIDetail(detailMovie);
});

function updateUIDetail(m) {
  const movieSectionDetail = showSectionDetail(m);
  const detailMovie = document.getElementById("detailMovie");
  detailMovie.innerHTML = movieSectionDetail;
}
