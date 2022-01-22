import { useState, useEffect } from "react";
import useFetch from '../../hooks/useFetch';
import Spinner from "../../components/Spinner";
import { addToList } from '../../utils/utils';
import './Movies.module.css';

const Movies = ({ data, error, isLoading, watchList, setWatchList }) => {

    const moviesElements = data.filter(movieType => movieType.type == "Movie").map(movie =>
        <article key={movie.id}>
            <img src={movie.posterUrl} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>{movie.actors}</p>
            <button onClick={() => addToList(data, movie.id, watchList, setWatchList, "watchList")}>add to watch list</button>
        </article>)

    return (
        <div className="Movies">
            <section>
                {isLoading ? <Spinner /> : moviesElements}
            </section>
            {error ? <p style={{ color: "red" }} > error</p> : ""}
        </div>)
}

export default Movies;

