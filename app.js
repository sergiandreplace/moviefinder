const API_KEY="507a235489179f67b111d793bb650650"
const POSTER_PLACEHOLDER="movie_placeholder.png"
const result = document.getElementsByClassName("result")[0]
const loading = document.getElementsByClassName("loading")[0]
const searchbox = document.getElementById("searchbox")

searchbox.addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
       searchMovie(searchbox.value)
    }
})

function searchMovie(query) {
    result.classList.add("hidden")
    loading.classList.remove("hidden")
    result.innerHTML=""
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`)
    .then(result => result.json())
    .then(movies => showMovies(movies.results))
}

function showMovies(movies) {
    result.classList.remove("hidden")
    loading.classList.add("hidden")

    for (var i = 0; i < movies.length; i++) {
        result.appendChild(buildMovieElement(movies[i]))
    }
}

function buildMovieElement(movie) {
    let posterUrl = POSTER_PLACEHOLDER
    
    const movieElement = document.createElement("div")
    movieElement.classList.add("movie")

    if (movie.backdrop_path) {
        movieElement.style.backgroundImage=`url('https://image.tmdb.org/t/p/w780${movie.backdrop_path}')`
    }    
    
    if (movie.poster_path) {
        posterUrl = `https://image.tmdb.org/t/p/w185${movie.poster_path}`
    }
    movieElement.innerHTML = ` <img class="movie-poster" src="${posterUrl}">`
    +`<div class="movie-content"><div class="movie-title">${movie.title}</div>`
    + `<div class="movie-overview">${movie.overview}</div></div></div>`
    
    return movieElement
}