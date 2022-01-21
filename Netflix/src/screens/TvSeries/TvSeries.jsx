// import { useState, useEffect } from "react";
import useFetch from '../../hooks/useFetch';
import Spinner from "../../components/Spinner";

const TvSeries = () => {
    const [data, error, isLoading] = useFetch("/data/tvSeriesDB.json")

    const tvSeriesElements = data.map(tvSeries => <article key={tvSeries.id}><h2>{tvSeries.l}</h2><img src={tvSeries.i?.imageUrl} alt={tvSeries.l} /><p>{tvSeries.y}</p><p>{tvSeries.s}</p></article>)

    return (
        <div className="TvSeries">
            {isLoading ? <Spinner /> : tvSeriesElements}
            {error ? <p style={{ color: "red" }} > error</p> : ""}
        </div>)
}

export default TvSeries;

