import Spinner from "../../components/Spinner";
import { useState } from "react";
import { showObjDetails, mainCardsDisplay } from '../../utils/utils';
import { Redirect } from "react-router-dom";
import MainBanner from "../../components/MainBanner";

const Movies = ({ data, error, isLoading, watchList, setWatchList, setMovieToPlay, setMovieDetails, favoritesList, setFavoritesList }) => {
    const [isRedirect, setIsRedirect] = useState(false);
    const [isRedirectToVideoPlayer, setIsRedirectToVideoPlayer] = useState(false);

    const elements = mainCardsDisplay("Movie", data, showObjDetails, setMovieDetails, setIsRedirect, watchList, setWatchList, favoritesList, setFavoritesList, setMovieToPlay, setIsRedirectToVideoPlayer);

    return (
        <div className="cardsContainer">
            <MainBanner />
            <div className="cards">{isLoading ? <Spinner /> : elements}</div>
            {error ? <p style={{ color: "red" }} > error</p> : ""}
            {isRedirect ? <Redirect to="/Details" /> : ""}
            {isRedirectToVideoPlayer ? <Redirect to="/VideoPlayer" /> : ""}
        </div>
    )
}

export default Movies;

