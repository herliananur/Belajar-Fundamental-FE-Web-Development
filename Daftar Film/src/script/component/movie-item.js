class Movie extends HTMLElement {

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `<div class="card mb-3">
        <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img-top" alt="Poster">
        <div class="card-body">
            <h6 class="card-title mb-6 text-center">${this._movie.original_title}</h6>
            <p class="card-text"> <b>Ringkasan :</b> ${this._movie.overview}</p>
        </div>
    </div>`;
    }
}

customElements.define("movie-item", Movie);