import { useState, useEffect } from "react";
import { removeFromList } from "../../utils/utils";

const UserWatchList = ({ watchList, setWatchList }) => {
    // const [state, setState] = useState("");

    const watchListElements = watchList.map(watchListObj =>
        <article key={watchListObj.id}>
            <img src={watchListObj.posterUrl} alt={watchListObj.title} />
            <h2>{watchListObj.title}</h2>
            <p>{watchListObj.year}</p>
            <p>{watchListObj.actors}</p>
            <button onClick={() => removeFromList(watchListObj.id, watchList, setWatchList, "watchList")}>remove from watch list</button>
        </article>)

    return (
        <div className="UserWatchList">
            <h1>Watch list page</h1>
            {watchListElements}

        </div>)
}

export default UserWatchList;

