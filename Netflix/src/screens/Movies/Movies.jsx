import Spinner from "../../components/Spinner/Spinner";
import { useState } from "react";
import { addToList, removeFromList, showObjDetails } from '../../utils/utils';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { BsHandThumbsUp } from "react-icons/bs";
import { Redirect } from "react-router-dom";

const Movies = ({ data, error, isLoading, watchList, setWatchList, setMovieDetails }) => {
    const [isRedirect, setIsRedirect] = useState(false);

    const moviesElements = data.filter(movieType => movieType.type == "Movie").map(movie =>
        <section key={movie.id}>
            <img src={movie.posterUrl} alt={movie.title} onClick={() => {
                showObjDetails(movie.id, data, setMovieDetails, setIsRedirect);
            }} />
            <article className="displayCont">
                <h2>{movie.title}</h2>
                <p>{movie.actors}</p>
                <p>{movie.year}</p>
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
            {isRedirect ? <Redirect to="/Details" /> : ""}
        </div>)
}

export default Movies;

