// import { useState, useEffect } from "react";
import useFetch from '../../hooks/useFetch';
import Spinner from "../../components/Spinner";
import { addToList } from '../../hooks/Utils';


const TvSeries = ({ watchList, setWatchList }) => {
    const [tvSeriesData, error, isLoading] = useFetch("/data/tvSeriesDB.json")

    const tvSeriesElements = tvSeriesData.map(tvSeries =>
        <article key={tvSeries.id}>
            <img src={tvSeries.i?.imageUrl} alt={tvSeries.l} />
            <h2>{tvSeries.l}</h2>
            <p>{tvSeries.y}</p>
            <p>{tvSeries.s}</p>
            <button onClick={() => addToList(tvSeriesData, tvSeries.id, watchList, setWatchList, "watchList")}>add to watch list</button>
        </article>)

    return (
        <div className="TvSeries">
            {isLoading ? <Spinner /> : tvSeriesElements}
            {error ? <p style={{ color: "red" }} > error</p> : ""}
        </div>)
}

export default TvSeries;

