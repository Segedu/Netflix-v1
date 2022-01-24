import { useState, useEffect } from "react";
import { addToList, removeFromList, searchData, showObjDetails } from '../../utils/utils';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { BsHandThumbsUp } from "react-icons/bs";
import styles from './Home.module.css';
import style from '../../App.css';
import { Redirect } from "react-router-dom";

const Home = ({ data, watchList, setWatchList, setMovieDetails }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState("");
    const [isRedirect, setIsRedirect] = useState(false);

    const Elements = data.map(display =>
        <section key={display.id}>
            <article className="displayCont">
                <h2>{display.title}</h2>
                <p>{display.actors}</p>
                <h3>{display.year}</h3>
                <img onClick={() => {
                    showObjDetails(display.id, data, setMovieDetails, setIsRedirect)
                }} src={display.posterUrl} alt={display.title} />
                <article className="buttonsCont">
                    <button className={style.button} onClick={() => addToList(data, display.id, watchList, setWatchList, "watchList")}><HiOutlinePlusCircle fontSize="xx-large" color="white" /></button>
                    <button className={style.button} onClick={() => removeFromList(display.id, watchList, setWatchList, "watchList")}><HiOutlineMinusCircle fontSize="xx-large" color="white" /></button>
                    <button className={style.button}><BsHandThumbsUp fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section>)

    const suggestionHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        setSuggestions([]);
    }

    const searchInputHandler = (searchTerm) => {
        searchData(searchTerm, data, setSuggestions, setSearchTerm);
    }

    const searchResultArr = searchTerm ? suggestions.map((suggestion, i) =>
        <section key={i} className="searchResultCont"
            onClick={() => suggestionHandler(suggestion.title)}><article>
                <h4>{suggestion.title}</h4>
                <img src={suggestion.posterUrl} />
            </article></section>) : "";

    return (
        <div className="MainContainer">
            <input onChange={(e) => searchInputHandler(e.target.value)} value={searchTerm} className={styles.searchInput} type="text" inputMode="search" placeholder="Type movie/Tv series..." />
            <button onClick={() => searchData(searchTerm, data, setSuggestions, setSearchTerm)} className={styles.searchBtn}>Search</button>
            <div className="HomePageTrailer">
                <div>{searchTerm ? searchResultArr : ""}</div>
            </div>
            {Elements}
            {isRedirect ? <Redirect to="/Details" /> : ""}
        </div>)
}

export default Home;

