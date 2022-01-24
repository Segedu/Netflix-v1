import Spinner from "../../components/Spinner";
import { useState } from "react";
import { addToList, removeFromList, showObjDetails } from '../../utils/utils';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { BsHandThumbsUp } from "react-icons/bs";
import { Redirect } from "react-router-dom";

const TvSeries = ({ data, error, isLoading, watchList, setWatchList, setMovieDetails }) => {
    const [isRedirect, setIsRedirect] = useState(false);

    const tvSeriesElements = data.filter(TvSeriesType => TvSeriesType.type == "TvShow").map(tvSeries =>
        <section key={tvSeries.id}>
            <img src={tvSeries.posterUrl} alt={tvSeries.title} onClick={() => {
                showObjDetails(tvSeries.id, data, setMovieDetails, setIsRedirect);
            }} />
            <article className="displayCont">
                <h2>{tvSeries.title}</h2>
                <p>{tvSeries.actors}</p>
                <p>{tvSeries.year}</p>
                <article className="buttonsCont">
                    <button onClick={() => addToList(data, tvSeries.id, watchList, setWatchList, "watchList")}>
                        <HiOutlinePlusCircle fontSize="xx-large" color="white" /></button>
                    <button onClick={() => removeFromList(tvSeries.id, watchList, setWatchList, "watchList")}>
                        <HiOutlineMinusCircle fontSize="xx-large" color="white" /></button>
                    <button><BsHandThumbsUp fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section>)

    return (
        <div className="MainContainer">
            {isLoading ? <Spinner /> : tvSeriesElements}
            {error ? <p style={{ color: "red" }} > error</p> : ""}
            {isRedirect ? <Redirect to="/Details" /> : ""}
        </div>)
}

export default TvSeries;

