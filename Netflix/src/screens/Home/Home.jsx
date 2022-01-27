import { useState } from "react";
import { addToList, removeFromList, showObjDetails, playVideo } from '../../utils/utils';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { BsHandThumbsUp, BsPlayCircle } from "react-icons/bs";
import { Redirect } from "react-router-dom";
import { API_KEY_MOVIES } from "../../../logic/key";
import styles from './Home.module.css';
import axios from "axios";

const Home = ({ data, watchList, setWatchList, setMovieDetails, setMovieToPlay, favoritesList, setFavoritesList }) => {
    const [searchResults, setSearchResults] = useState([])
    const [isRedirect, setIsRedirect] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState("");
    const [isRedirectToVideoPlayer, setIsRedirectToVideoPlayer] = useState(false);

    function getMovies(searchTerm) {
        const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY_MOVIES}`;
        axios.get(url)
            .then(response => {
                console.log(response.data);
                if (response.data.Search) {
                    setSearchResults(response.data.Search);
                }
            }).catch(error => {
                console.log(error);
            });
    }

    const Elements = data.map(display =>
        <section key={display.id}>
            <img src={display.posterUrl} alt={display.title} />
            <article className="displayCont" onClick={() => {
                showObjDetails(display.id, data, setMovieDetails, setIsRedirect)
            }}>
                <h2>{display.title}</h2>
                <p>{display.actors}</p>
                <h3>{display.year}</h3>
                <article className="buttonsCont">
                    <button onClick={() => playVideo(display.video, setMovieToPlay, data, setIsRedirectToVideoPlayer)}><BsPlayCircle title="play video" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => addToList(data, display.id, watchList, setWatchList, "watchList")}><HiOutlinePlusCircle fontSize="xx-large" color="white" /></button>
                    <button onClick={() => removeFromList(display.id, watchList, setWatchList, "watchList")}><HiOutlineMinusCircle fontSize="xx-large" color="white" /></button>
                    <button onClick={() => addToList(data, display.id, favoritesList, setFavoritesList, "favoritesList")}><BsHandThumbsUp title="Like" fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section>)


    const searchInputHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
    }

    const searchResultsElements = searchResults.map((movie) =>
        <section key={movie.imdbID}>
            <img src={movie.Poster} />
            <article className="displayCont">
                <h4>{movie.Title}</h4>
                <article className="buttonsCont">
                    <button onClick={() => playVideo(movie.video, setMovieToPlay, data, setIsRedirectToVideoPlayer)}><BsPlayCircle fontSize="xx-large" color="white" /></button>
                    <button onClick={() => addToList(data, movie.id, watchList, setWatchList, "watchList")}> <HiOutlinePlusCircle title="Add to watch list" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => removeFromList(movie.id, watchList, setWatchList, "watchList")}> <HiOutlineMinusCircle title="Remove from watch list" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => addToList(data, movie.id, favoritesList, setFavoritesList, "favoritesList")}><BsHandThumbsUp title="Like" fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section>
    )

    return (
        <div className="MainContainer">
            <input onChange={(e) => searchInputHandler(e.target.value)} value={searchTerm} className={styles.searchInput} type="text" inputMode="search" placeholder="Type movie / Tv series..." autoComplete="true" />
            <button onClick={() => getMovies(searchTerm)} className={styles.searchBtn}>Search</button>
            <div className="HomePageTrailer">
                <iframe width="1366" height="625" src="https://www.youtube-nocookie.com/embed/GV3HUDMQ-F8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="searchResultCont" >{searchTerm ? searchResultsElements : Elements}</div>
            {isRedirect ? <Redirect to="/Details" /> : ""}
            {isRedirectToVideoPlayer ? <Redirect to="/VideoPlayer" /> : ""}
        </div >)
}

export default Home;

