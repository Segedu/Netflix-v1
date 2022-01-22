// import { useState, useEffect } from "react";
import useFetch from '../../hooks/useFetch';
import Spinner from "../../components/Spinner";
import { addToList } from '../../utils/utils';


const TvSeries = ({ tvShowsData, tvShowsError, tvShowsIsLoading }) => {

    const tvSeriesElements = tvShowsData.map(tvSeries =>
        <article key={tvSeries.id}>
            <img src={tvSeries.i?.imageUrl} alt={tvSeries.l} />
            <h2>{tvSeries.l}</h2>
            <p>{tvSeries.y}</p>
            <p>{tvSeries.s}</p>
            <button onClick={() => addToList(tvShowsData, tvSeries.id, watchList, setWatchList, "watchList")}>add to watch list</button>
        </article>)

    return (
        <div className="TvSeries">
            {tvShowsIsLoading ? <Spinner /> : tvSeriesElements}
            {tvShowsError ? <p style={{ color: "red" }} > error</p> : ""}
        </div>)
}

export default TvSeries;

