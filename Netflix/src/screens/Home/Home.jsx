import { useState, useEffect } from "react";
import { addToList, removeFromList } from '../../utils/utils';

const Home = ({ data, watchList, setWatchList }) => {
    const [state, setState] = useState("");


    const Elements = data.map(display =>
        <article key={display.id}>
            {/* <video width="750" height="500" autoPlay loop muted >
            <source src={display.imageUrl} type="video/mp4" />
        </video> */}
            <article className="imgCont">
                <img src={display.posterUrl} alt={display.title} />
            </article>
            <h2>{display.title}</h2>
            <p>{display.year}</p>
            <p>{display.actors}</p>
            <button onClick={() => addToList(data, display.id, watchList, setWatchList, "watchList")}>add to watch list</button>
            <button onClick={() => removeFromList(display.id, watchList, setWatchList, "watchList")}>remove from watch list</button>

        </article>)
    return (
        <div className="MainContainer">
            <h1>home page</h1>
            {Elements}
        </div>)
}

export default Home;

