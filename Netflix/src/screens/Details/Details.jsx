import { useState } from "react";
import { BsHandThumbsUp, BsPlayCircle } from "react-icons/bs";
import { HiOutlinePlusCircle } from "react-icons/hi";
import style from './Details.module.css';

const Details = ({ movieDetails }) => {
    return (
        <div className={style.Details}>
            <img src={movieDetails.posterUrl} />
            <article className={style.DetailsDisplay}>
                <h2>{movieDetails.title}</h2>
                <p>{movieDetails.year}</p>
                <p>{movieDetails.actors}</p>
                <p>{movieDetails.description ? description : ""}</p>
                <button><BsPlayCircle fontSize="xx-large" color="white" /></button>
                <button onClick={() => addToList(data, movieDetails.id, watchList, setWatchList, "watchList")}><HiOutlinePlusCircle fontSize="xx-large" color="white" /></button>
                <button ><BsHandThumbsUp fontSize="xx-large" color="white" /></button>
            </article>
        </div>)
}

export default Details;