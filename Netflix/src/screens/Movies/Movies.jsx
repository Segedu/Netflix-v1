import Spinner from "../../components/Spinner/Spinner";
import { useState } from "react";
import { addToList, removeFromList, showObjDetails, playVideo } from '../../utils/utils';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { BsHandThumbsUp, BsPlayCircle } from "react-icons/bs";
import { Redirect } from "react-router-dom";

const Movies = ({ data, error, isLoading, watchList, setWatchList, setMovieToPlay, setMovieDetails, favoritesList, setFavoritesList }) => {
    const [isRedirect, setIsRedirect] = useState(false);
    const [isRedirectToVideoPlayer, setIsRedirectToVideoPlayer] = useState(false);

    const moviesElements = data.filter(movieType => movieType.type == "Movie").map(movie =>
        <section key={movie.id}>
            <img src={movie.posterUrl} alt={movie.title} />
            <article className="displayCont" onClick={() => {
                showObjDetails(movie.id, data, setMovieDetails, setIsRedirect);
            }}>
                <h2>{movie.title}</h2>
                <p>{movie.actors}</p>
                <h3>{movie.year}</h3>
                <article className="buttonsCont">
                    <button onClick={() => playVideo(movie.video, setMovieToPlay, data, setIsRedirectToVideoPlayer)}><BsPlayCircle title="play video" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => addToList(data, movie.id, watchList, setWatchList, "watchList")}><HiOutlinePlusCircle title="Add to watch list" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => removeFromList(movie.id, watchList, setWatchList, "watchList")}><HiOutlineMinusCircle title="Remove from watch list" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => addToList(data, movie.id, favoritesList, setFavoritesList, "favoritesList")}><BsHandThumbsUp title="Like" fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section >)

    return (
        <div className="cardsContainer">
            {isLoading ? <Spinner /> : moviesElements}
            {error ? <p style={{ color: "red" }} > error</p> : ""}
            {isRedirect ? <Redirect to="/Details" /> : ""}
            {isRedirectToVideoPlayer ? <Redirect to="/VideoPlayer" /> : ""}
        </div>)
}

export default Movies;

