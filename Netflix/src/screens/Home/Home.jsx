import { useState, useEffect } from "react";
import { addToList, removeFromList, searchData } from '../../utils/utils';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { BsHandThumbsUp } from "react-icons/bs";
import mainTrailer from '../../video/homepagetrailer.mp4';

const Home = ({ data, watchList, setWatchList }) => {
    const [suggestions, setSuggestions] = useState("");
    const [searchTerm, setSearchTerm] = useState("");


    const Elements = data.map(display =>
        <section key={display.id}>
            {/* <video width="500" height="500" controls> */}
            {/* <source src={display.trailer} type="video/mp4" /> */}
            {/* </video> */}
            <article className="displayCont">
                <h2>{display.title}</h2>
                <p>{display.actors}</p>
                <h3>{display.year}</h3>
                <img src={display.posterUrl} alt={display.title} />
                <article className="buttonsCont">
                    <button onClick={() => addToList(data, display.id, watchList, setWatchList, "watchList")}><HiOutlinePlusCircle fontSize="xx-large" color="white" /></button>
                    <button onClick={() => removeFromList(display.id, watchList, setWatchList, "watchList")}><HiOutlineMinusCircle fontSize="xx-large" color="white" /></button>
                    <button><BsHandThumbsUp fontSize="xx-large" color="white" /></button>
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

    return (
        <div className="MainContainer">
            <input onChange={(e) => searchInputHandler(e.target.value)} value={searchTerm} className="searchInput" type="text" inputMode="search" placeholder="Type movie/Tv series..." />
            <div>
                {suggestions && suggestions.map((suggestion, i) =>
                    <section key={i} className="searchResultCont" onClick={() => suggestionHandler(suggestion.title)}><article>
                        <h4>{suggestion.title}</h4><h4>{suggestion.year}</h4><img src={suggestion.posterUrl} />
                    </article></section>)}
            </div>
            <div className="HomePageTrailer">
                <iframe width="1300" height="440" src="https://www.youtube.com/embed/EC9EFoot_a0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            {Elements}
        </div>)
}

export default Home;

