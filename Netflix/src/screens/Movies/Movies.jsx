// import { useState, useEffect } from "react";
import useFetch from '../../hooks/useFetch';
import Spinner from "../../components/Spinner";

const Movies = () => {
    const [data, error, isLoading] = useFetch("/data/moviesDB.json")

    const moviesElements = data.map(movie => <article key={movie.id}><h2>{movie.title}</h2><p>{movie.year}</p><img src={movie.posterUrl} alt={movie.title} /><p>{movie.actors}</p></article>)

    return (
        <div className="Movies">
            {isLoading ? <Spinner /> : moviesElements}
            {error ? <p style={{ color: "red" }} > error</p> : ""}
        </div>)
}

export default Movies;

