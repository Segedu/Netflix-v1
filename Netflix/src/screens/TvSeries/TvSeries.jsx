import Spinner from "../../components/Spinner/Spinner";
import { useState } from "react";
import { showObjDetails, mainCardsDisplay } from '../../utils/utils';
import { Redirect } from "react-router-dom";

const TvSeries = ({ data, error, isLoading, watchList, setWatchList, setMovieDetails, setMovieToPlay, favoritesList, setFavoritesList }) => {
    const [isRedirect, setIsRedirect] = useState(false);
    const [isRedirectToVideoPlayer, setIsRedirectToVideoPlayer] = useState(false);

    const elements = mainCardsDisplay("series", data, showObjDetails, setMovieDetails, setIsRedirect, watchList, setWatchList, favoritesList, setFavoritesList, setMovieToPlay, setIsRedirectToVideoPlayer);

    return (
        <div className="cardsContainer">
            {isLoading ? <Spinner /> : elements}
            {error ? <p style={{ color: "red" }} > error</p> : ""}
            {isRedirect ? <Redirect to="/Details" /> : ""}
            {isRedirectToVideoPlayer ? <Redirect to="/VideoPlayer" /> : ""}
        </div>
    )
}

export default TvSeries;

