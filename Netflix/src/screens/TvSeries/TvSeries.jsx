import Spinner from "../../components/Spinner/Spinner";
import { useState } from "react";
import { addToList, removeFromList, showObjDetails } from '../../utils/utils';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { BsHandThumbsUp } from "react-icons/bs";
import { Redirect } from "react-router-dom";

const TvSeries = ({ data, error, isLoading, watchList, setWatchList, setMovieDetails, favoritesList, setFavoritesList }) => {
    const [isRedirect, setIsRedirect] = useState(false);

    const tvSeriesElements = data.filter(TvSeriesType => TvSeriesType.type == "series").map(tvSeries =>
        <section key={tvSeries.id}>
            <img src={tvSeries.posterUrl} alt={tvSeries.title} />
            <article className="displayCont" onClick={() => {
                showObjDetails(tvSeries.id, data, setMovieDetails, setIsRedirect);
            }}>
                <h2>{tvSeries.title}</h2>
                <p>{tvSeries.actors}</p>
                <h3>{tvSeries.year}</h3>
                <article className="buttonsCont">
                    <button onClick={() => addToList(data, tvSeries.id, watchList, setWatchList, "watchList")}> <HiOutlinePlusCircle title="Add to watch list" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => removeFromList(tvSeries.id, watchList, setWatchList, "watchList")}> <HiOutlineMinusCircle title="Remove from watch list" fontSize="xx-large" color="white" /></button>
                    <button onClick={() => addToList(data, tvSeries.id, favoritesList, setFavoritesList, "favoritesList")}><BsHandThumbsUp title="Like" fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section>)

    return (
        <div className="cardsContainer">
            {isLoading ? <Spinner /> : tvSeriesElements}
            {error ? <p style={{ color: "red" }} > error</p> : ""}
            {isRedirect ? <Redirect to="/Details" /> : ""}
        </div>)
}

export default TvSeries;

