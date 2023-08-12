class DataSource {

    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=d398f6ca93a9dc48318af85c2059bd55&query=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found!`);
                }
            })
    }
}

export default DataSource;