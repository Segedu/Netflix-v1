import useFetch from '../../hooks/useFetch';
import Spinner from "../../components/Spinner";
import { addToList } from '../../utils/utils';

const TvSeries = ({ data, error, isLoading, watchList, setWatchList }) => {

    const tvSeriesElements = data.filter(TvSeriesType => TvSeriesType.type == "TvShow").map(tvSeries =>
        <article key={tvSeries.id}>
            {/* <video width="750" height="500" autoPlay loop muted >
            <source src={tvSeries.imageUrl} type="video/mp4" />
        </video> */}
            <article className="imgCont">
                <img src={tvSeries.posterUrl} alt={tvSeries.title} />
            </article>
            <h2>{tvSeries.title}</h2>
            <p>{tvSeries.year}</p>
            <p>{tvSeries.actors}</p>
            <button onClick={() => addToList(data, tvSeries.id, watchList, setWatchList, "watchList")}>add to watch list</button>
        </article>)
    return (
        <div className="MainContainer">
            {isLoading ? <Spinner /> : tvSeriesElements}
            {error ? <p style={{ color: "red" }} > error</p> : ""}
        </div>)
}

export default TvSeries;

