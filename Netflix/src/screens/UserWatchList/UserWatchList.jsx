import { useState } from "react";
import { removeFromList, addToList, playVideo } from "../../utils/utils";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { BsHandThumbsUp, BsPlayCircle } from "react-icons/bs";
import { Redirect } from "react-router-dom";

// import style from '../../App.css';

const UserWatchList = ({ data, watchList, setWatchList, setMovieToPlay, favoritesList, setFavoritesList }) => {
    const [isRedirectToVideoPlayer, setIsRedirectToVideoPlayer] = useState(false);

    const watchListElements = watchList.map(watchListObj =>
        <section key={watchListObj.id}>
            <img src={watchListObj.posterUrl} alt={watchListObj.title} />
            <article className="displayCont">
                <h2>{watchListObj.title}</h2>
                <p>{watchListObj.actors}</p>
                <h3>{watchListObj.year}</h3>
                <article className="buttonsCont">
                    <button onClick={() => playVideo(watchListObj.video, setMovieToPlay, data, setIsRedirectToVideoPlayer)}><BsPlayCircle title="play video" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => addToList(data, watchListObj.id, favoritesList, setFavoritesList, "favoritesList")}><BsHandThumbsUp title="Like" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => removeFromList(watchListObj.id, watchList, setWatchList, "watchList")}><HiOutlineMinusCircle title="Remove from watch list" fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section>)

    const favoritesElements = favoritesList.map(likedItem =>
        <section key={likedItem.id}>
            <img src={likedItem.posterUrl} alt={likedItem.title} />
            <article className="displayCont">
                <h2>{likedItem.title}</h2>
                <p>{likedItem.year}</p>
                <p>{likedItem.actors}</p>
                <article className="buttonsCont">
                    <button onClick={() => addToList(data, likedItem.id, watchList, setWatchList, "watchList")}><BsHandThumbsUp title="Like" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => removeFromList(likedItem.id, favoritesList, setFavoritesList, "favoritesList")}><HiOutlineMinusCircle title="Remove from watch list" fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section>)


    return (
        <div className="cardsContainer">
            <h1>Watch List</h1>
            <div className="watchListCont"> {watchListElements}
            </div>
            <h1>Favorites</h1>
            <div className="favoritesCont"> {favoritesElements}
            </div>
            {isRedirectToVideoPlayer ? <Redirect to="/VideoPlayer" /> : ""}
        </div>)
}

export default UserWatchList;

