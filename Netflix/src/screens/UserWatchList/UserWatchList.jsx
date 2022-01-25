import { useState } from "react";
import { removeFromList, addToList } from "../../utils/utils";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { BsHandThumbsUp } from "react-icons/bs";
import style from '../../App.css';

const UserWatchList = ({ data, watchList, setWatchList }) => {
    const [favoritesList, setFavoritesList] = useState([]);

    const watchListElements = watchList.map(watchListObj =>
        <section key={watchListObj.id}>
            <img src={watchListObj.posterUrl} alt={watchListObj.title} />
            <article className="displayCont">
                <h2>{watchListObj.title}</h2>
                <p>{watchListObj.year}</p>
                <p>{watchListObj.actors}</p>
                <article className="buttonsCont">
                    <button onClick={() => removeFromList(watchListObj.id, watchList, setWatchList, "watchList")}><HiOutlineMinusCircle title="Remove from watch list" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => addToList(data, watchListObj.id, favoritesList, setFavoritesList, "favoritesList")}><BsHandThumbsUp title="Like" fontSize="xx-large" color="white" /></button>
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
        <div className={style.MainContainer}>
            <h1>Your Watch list</h1>
            <div className={style.watchListCont}> {watchListElements}
            </div>
            <h1>Your Favorites</h1>
            <div className={style.favoritesCont}> {favoritesElements}
            </div>
        </div>)
}

export default UserWatchList;

