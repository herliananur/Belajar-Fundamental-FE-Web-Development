import '../component/movie-list.js'
import '../component/search-bar.js';
import DataSource from "../data/data-source.js";

const main = () => {
    const inputOfSearch = document.querySelector("search-bar");
    const listOfMovie = document.querySelector("movie-list");


    const onButtonSearchClicked = () => {
        DataSource.searchMovie(inputOfSearch.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        listOfMovie.movies = results;
    }

    const fallbackResult = message => {
        listOfMovie.renderError(message);
    }

    inputOfSearch.clickEvent = onButtonSearchClicked;

}

export default main;