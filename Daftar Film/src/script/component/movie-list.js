import './movie-item.js';

class Details extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    renderError(message) {
        this.innerHTML = ``;
    }

    render() {
        this.innerHTML = "";
        this._movies.forEach(movie => {
            const movieItem = document.createElement("movie-item");
            movieItem.setAttribute("class", "col-md-2");
            movieItem.movie = movie
            this.appendChild(movieItem);
        });
    };
}

customElements.define("movie-list", Details);