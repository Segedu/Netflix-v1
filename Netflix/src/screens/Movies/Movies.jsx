import { useState, useEffect } from "react";
import useFetch from '../../hooks/useFetch';
import Spinner from "../../components/Spinner";
import { addToList, removeFromList } from '../../utils/utils';
// import './Movies.module.css';

const Movies = ({ data, error, isLoading, watchList, setWatchList }) => {

    const moviesElements = data.filter(movieType => movieType.type == "Movie").map(movie =>
        <article key={movie.id}>
            <article className="displayCont">
                <img src={movie.posterUrl} alt={movie.title} />
                <h2>{movie.title}</h2>
            </article>
            <p>{movie.year}</p>
            <p>{movie.actors}</p>
            <button onClick={() => addToList(data, movie.id, watchList, setWatchList, "watchList")}>add to watch list</button>
            <button onClick={() => removeFromList(movie.id, watchList, setWatchList, "watchList")}>remove from watch list</button>
        </article>)

    return (
        <div className="MainContainer">
            {isLoading ? <Spinner /> : moviesElements}
            {error ? <p style={{ color: "red" }} > error</p> : ""}
        </div>)
}

export default Movies;

