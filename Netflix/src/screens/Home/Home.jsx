import { useState, useEffect } from "react";
import { addToList, removeFromList, searchData } from '../../utils/utils';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { BsHandThumbsUp } from "react-icons/bs";

const Home = ({ data, watchList, setWatchList }) => {
    const [suggestions, setSuggestions] = useState("");
    const [searchTerm, setSearchTerm] = useState("");


    const Elements = data.map(display =>
        <section key={display.id}>
            {/* <video width="750" height="500" autoPlay loop muted >
            <source src={display.imageUrl} type="video/mp4" />
        </video> */}
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

    return (
        <div className="MainContainer">
            <input onChange={(e) => searchData(e.target.value, data, setSuggestions, setSearchTerm)} className="searchInput" type="search" inputMode="search" placeholder="Type movie/Tv series..." />
            <div>
                {searchTerm ? suggestions.map((suggestion, i) => <article key={i}><p onClick={() => suggestionHandler(suggestion.title)}>{suggestion.title}</p></article>) : ""}
            </div>
            <div className="HomePageTrailer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, atque.
                Placeat sed voluptatum qui asperiores tenetur fugiat deserunt cumque totam!
                Ipsum quasi expedita perspiciatis ullam porro quae atque. Laborum, ab?
                Facere iure eum ad architecto aliquam in hic dolores eos.
                Vitae accusantium dolorem quibusdam? Dolores dolorum nobis impedit est ratione!
                Accusantium, optio repudiandae soluta iste vero aspernatur error deserunt in.
            </div>
            {Elements}
        </div>)
}

export default Home;

