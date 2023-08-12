class Film extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#search-input").value;
    }

    render() {
        this.innerHTML = `<nav class="navbar bg-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand">Daftar Film</a>
            <form class="d-flex" role="search">
                <input type="text" id="search-input" class="form-control me-2" type="search" placeholder="Cari Film" aria-label="Search">
                <button class="btn btn-outline-dark" type="button" id="search-button">Cari</button>
            </form>
        </div>
    </nav>`;

        this.querySelector("#search-button").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", Film);