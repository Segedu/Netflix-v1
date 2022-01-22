// import { useState, useEffect } from "react";
import useFetch from '../../hooks/useFetch';
import Spinner from "../../components/Spinner";
import { addToList } from '../../utils/utils';
import './TvSeries.module.css'

const TvSeries = ({ data, error, isLoading, watchList, setWatchList }) => {

    const tvSeriesElements = data.filter(tvShowType => tvShowType.type == "TvShow").map(tvSeries =>
        <article key={tvSeries.id}>
            {/* <video width="750" height="500" autoPlay loop muted >
            <source src={tvSeries.imageUrl} type="video/mp4" />
        </video> */}
            <img src={tvSeries.posterUrl} alt={tvSeries.title} />
            <h2>{tvSeries.title}</h2>
            <p>{tvSeries.year}</p>
            <p>{tvSeries.actors}</p>
            <button onClick={() => addToList(data, tvSeries.id, watchList, setWatchList, "watchList")}>add to watch list</button>
        </article>)
    return (
        <div className="TvSeries">
            {isLoading ? <Spinner /> : tvSeriesElements}
            {error ? <p style={{ color: "red" }} > error</p> : ""}
        </div>)
}

export default TvSeries;

