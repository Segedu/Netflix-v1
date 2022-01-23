import useFetch from '../../hooks/useFetch';
import Spinner from "../../components/Spinner";
import { addToList, removeFromList } from '../../utils/utils';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { BsHandThumbsUp } from "react-icons/bs";

const TvSeries = ({ data, error, isLoading, watchList, setWatchList }) => {

    const tvSeriesElements = data.filter(TvSeriesType => TvSeriesType.type == "TvShow").map(tvSeries =>
        <section key={tvSeries.id}>
            <article className="displayCont">
                <h2>{tvSeries.title}</h2>
                <p>{tvSeries.actors}</p>
                <p>{tvSeries.year}</p>
                <img src={tvSeries.posterUrl} alt={tvSeries.title} />
                <article className="buttonsCont">
                    <button onClick={() => addToList(data, tvSeries.id, watchList, setWatchList, "watchList")}><HiOutlinePlusCircle fontSize="xx-large" color="white" /></button>
                    <button onClick={() => removeFromList(tvSeries.id, watchList, setWatchList, "watchList")}><HiOutlineMinusCircle fontSize="xx-large" color="white" /></button>
                    <button><BsHandThumbsUp fontSize="xx-large" color="white" /></button>
                </article>
            </article>
        </section>)
    return (
        <div className="MainContainer">
            {isLoading ? <Spinner /> : tvSeriesElements}
            {error ? <p style={{ color: "red" }} > error</p> : ""}
        </div>)
}

export default TvSeries;

