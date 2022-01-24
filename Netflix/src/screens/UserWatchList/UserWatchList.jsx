import { useState, useEffect } from "react";
import { removeFromList } from "../../utils/utils";
import { HiOutlineMinusCircle } from "react-icons/hi";

const UserWatchList = ({ watchList, setWatchList }) => {

    const watchListElements = watchList.map(watchListObj =>
        <section key={watchListObj.id}>
            <article className="displayCont">
                <img src={watchListObj.posterUrl} alt={watchListObj.title} />
                <h2>{watchListObj.title}</h2>
                <p>{watchListObj.year}</p>
                <p>{watchListObj.actors}</p>
                <article className="buttonsCont">
                    <button onClick={() => removeFromList(watchListObj.id, watchList, setWatchList, "watchList")}>
                        <HiOutlineMinusCircle title="Remove from watch list" fontSize="xx-large" color="white" /></button>
                    <button><BsHandThumbsUp title="Like" fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section>)

    return (
        <div className="MainContainer">
            <h1>Watch list page</h1>
            {watchListElements}
        </div>)
}

export default UserWatchList;

