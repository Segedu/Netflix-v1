import { useState } from "react";
import { addToList, removeFromList, showObjDetails, playVideo, getMovies } from '../../utils/utils';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsHandThumbsUp, BsPlayCircle } from "react-icons/bs";
import { Redirect } from "react-router-dom";
import { API_KEY_MOVIES } from '../../../logic/key';
import style from './Home.module.css';
import axios from "axios";
import MainBanner from "../../components/MainBanner";

const Home = ({ searchTerm, setSearchTerm, searchResults, setSearchResults, data, watchList, setWatchList, setMovieDetails, setMovieToPlay, favoritesList, setFavoritesList }) => {
    const [isRedirect, setIsRedirect] = useState(false);
    const [suggestions, setSuggestions] = useState("");
    const [isRedirectToVideoPlayer, setIsRedirectToVideoPlayer] = useState(false);

    getMovies(searchTerm, setSearchResults, API_KEY_MOVIES);

    const Elements = data.map(display =>
        <section className={style.cardsSection} key={display.id}>
            <img src={display.posterUrl} alt={display.title} />
            <article className={style.details}>
                <article className={style.buttonsCont}>
                    <button onClick={() => playVideo(data, display.video, setMovieToPlay, setIsRedirectToVideoPlayer)}><BsPlayCircle title="play video" className={style.icons} /></button>
                    <button onClick={() => addToList(data, display.id, watchList, setWatchList, "watchList")}><HiOutlinePlusCircle className={style.icons} /></button>
                    <button onClick={() => addToList(data, display.id, favoritesList, setFavoritesList, "favoritesList")}><BsHandThumbsUp title="Like" className={style.icons} /></button>
                    <button onClick={() => showObjDetails( display.id,data, setMovieDetails, setIsRedirect)}>< IoIosArrowDropdown title="Details" className={style.icons} /></button>
                </article>
                <article className={style.textDetailsCont}>
                    <p>{display.title}</p>
                    <p>{display.actors}</p>
                    <p>{display.year}</p>
                </article>
            </article>
        </section>
    )

    const searchResultsElements = searchResults.map((movie) =>
        <section className={style.cardsSection} key={movie.imdbID}>
            <img src={movie.Poster} />
            <article className={style.details}>
                <h4>{movie.Title}</h4>
                <article className={style.buttonsCont}>
                    <button onClick={() => playVideo(movie.video, setMovieToPlay, data, setIsRedirectToVideoPlayer)}><BsPlayCircle fontSize="xx-large" color="white" /></button>
                    <button onClick={() => addToList(data, movie.id, watchList, setWatchList, "watchList")}> <HiOutlinePlusCircle title="Add to watch list" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => removeFromList(movie.id, watchList, setWatchList, "watchList")}> <HiOutlineMinusCircle title="Remove from watch list" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => addToList(data, movie.id, favoritesList, setFavoritesList, "favoritesList")}><BsHandThumbsUp title="Like" fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section>
    )

    const watchListElements = watchList.map(watchListObj =>
        <section className={style.cardsSection} key={watchListObj.id}>
            <img src={watchListObj.posterUrl} alt={watchListObj.title} />
            <article className={style.details}>
                <h4>{watchListObj.title}</h4>
                {/* <p>{watchListObj.actors}</p> */}
                <h4>{watchListObj.year}</h4>
                <article className={style.buttonsCont}>
                    <button onClick={() => playVideo(data, watchListObj.video, setMovieToPlay, setIsRedirectToVideoPlayer)}><BsPlayCircle title="play video" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => addToList(data, watchListObj.id, favoritesList, setFavoritesList, "favoritesList")}><BsHandThumbsUp title="Like" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => removeFromList(watchListObj.id, watchList, setWatchList, "watchList")}><HiOutlineMinusCircle title="Remove from watch list" fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section>
    )

    const favoritesElements = favoritesList.map(likedItem =>
        <section className={style.cardsSection} key={likedItem.id}>
            <img src={likedItem.posterUrl} alt={likedItem.title} />
            <article className={style.details}>
                <h4>{likedItem.title}</h4>
                {/* <p>{likedItem.actors}</p> */}
                <p>{likedItem.year}</p>
                <article className={style.buttonsCont}>
                    <button onClick={() => addToList(data, likedItem.id, watchList, setWatchList, "watchList")}><BsHandThumbsUp title="Like" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => removeFromList(likedItem.id, favoritesList, setFavoritesList, "favoritesList")}><HiOutlineMinusCircle title="Remove from watch list" fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section>
    )

    return (
        <div className={style.cardsContainer}>
            <MainBanner />
            <h1>Movies & TV shows</h1>
            <div className={style.cardsRow} >{searchTerm ? searchResultsElements : <section className={style.slider}>{Elements}</section>}</div>
            <h1>Your Watch List</h1>
            <div className={style.watchListCards}>{watchListElements}</div>
            <h1>Your Favorites</h1>
            <div className={style.favoritesCards}> {favoritesElements}</div>
            {isRedirect ? <Redirect to="/Details" /> : ""}
            {isRedirectToVideoPlayer ? <Redirect to="/VideoPlayer" /> : ""}
        </div >
    )
}

export default Home;

