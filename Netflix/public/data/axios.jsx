// const API_KEY = "33e1714f2326d0c1e81bf46cf96bace4";
// const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

//! 7c5dff80

 // const [tvSeries, setTvSeries] = useState([]);
  // useEffect(getTvSeries, [])

  // const options = {
  //   method: 'GET',
  //   url: 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies',

  //   headers: {
  //     'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  //     'x-rapidapi-key': '076f457f15msh939ae9e14ee8ad5p183ac1jsn3103ba208eb5'
  //   }
  // };


  //todo: drama, action, Mystery, fiction, toprated- tvSeries collection

  //todo: drama- json, movies.js, mongo
  //todo: action- json, movies.js, mongo
  //todo: Mystery - json, movies.js, mongo
  //todo: fiction- json, movies.js, mongo
  //todo: top rated- json, movies.js, mongo

//!suggestions -home page
     // const searchResultArr = searchTerm ? suggestions.map((suggestion, i) =>
    //     <section key={i} className="searchResultCont"
    //         onClick={() => suggestionHandler(suggestion.title)}><article>
    //             <h4>{suggestion.title}</h4>
    //             <img src={suggestion.posterUrl} />
    //         </article></section>) : "";


  // useEffect(getData, [options.url]);

  // function getData() {
  //   axios.request(options)
  //     .then(response => {
  //       // console.log(JSON.stringify(response.data.d))  
  //       console.log(response.data.d);
  //       setMovies(response.data.d)
  //     }).catch(error => {
  //       console.error(error)
  //     })
  // }

  //!important
  // const url = '/data/moviesDB.js';
  // useEffect(getMovies, [url]);

  // function getMovies() {
  //   axios.get(url)
  //     .then(response => {
  //       console.log(response.data);
  //       setMovies(response.data);
  //     }).catch(error => {
  //       console.log(error.message)
  //     });
  // }

  // const moviesElements = movies.map(movie => <article key={movie.id}><h2>{movie.l}</h2><p>{movie.y}</p><img src={movie.i?.imageUrl} alt={movie.l} /><p>{movie.s}</p></article>)
  // const moviesElements = movies.map(movie => <article key={movie.id}><h2>{movie.title}</h2><p>{movie.year}</p><img src={movie.posterUrl} alt={movie.title} /><p>{movie.actors}</p></article>)
