import { useState, useEffect } from "react";
import useFetch from '../../hooks/useFetch';
import Spinner from "../../components/Spinner";
import { addToList, removeFromList } from '../../utils/utils';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { BsHandThumbsUp } from "react-icons/bs";

const Movies = ({ data, error, isLoading, watchList, setWatchList }) => {

    const moviesElements = data.filter(movieType => movieType.type == "Movie").map(movie =>
        <section key={movie.id}>
            <article className="displayCont">
                <h2>{movie.title}</h2>
                <p>{movie.actors}</p>
                <p>{movie.year}</p>
                <img src={movie.posterUrl} alt={movie.title} />
                <article className="buttonsCont">
                    <button onClick={() => addToList(data, movie.id, watchList, setWatchList, "watchList")}><HiOutlinePlusCircle fontSize="xx-large" color="white" /></button>
                    <button onClick={() => removeFromList(movie.id, watchList, setWatchList, "watchList")}><HiOutlineMinusCircle fontSize="xx-large" color="white" /></button>
                    <button><BsHandThumbsUp fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section >)

    return (
        <div className="MainContainer">
            {isLoading ? <Spinner /> : moviesElements}
            {error ? <p style={{ color: "red" }} > error</p> : ""}
        </div>)
}

export default Movies;

