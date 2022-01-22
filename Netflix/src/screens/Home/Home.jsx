import { useState, useEffect } from "react";
import { addToList, removeFromList, searchData } from '../../utils/utils';

const Home = ({ data, watchList, setWatchList }) => {
    const [searchResultArray, setSearchResultArray] = useState("");
    const [searchString, setSearchString] = useState("");


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
            <input onChange={(e) => searchData(setSearchString(e.target.value.toLowerCase()), data, setSearchResultArray)} className="searchInput" type="search" inputMode="search" placeholder="Type movie/Tv series..." />
            <div className="HomePageTrailer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, atque.
                Placeat sed voluptatum qui asperiores tenetur fugiat deserunt cumque totam!
                Ipsum quasi expedita perspiciatis ullam porro quae atque. Laborum, ab?
                Facere iure eum ad architecto aliquam in hic dolores eos.
                Vitae accusantium dolorem quibusdam? Dolores dolorum nobis impedit est ratione!
                Accusantium, optio repudiandae soluta iste vero aspernatur error deserunt in.
                Unde dolorum, atque perspiciatis quasi illum deserunt natus eaque ea.
                Earum dolorum incidunt cum tempore pariatur nemo facilis beatae minima.
                Aut numquam officiis ipsam nam excepturi dignissimos molestias architecto fugiat.
                Officiis amet laborum beatae vitae, ut neque sint veniam sunt.</div>
            {Elements}
            {searchResultArray ? searchResultArray : ""}
        </div>)
}

export default Home;

