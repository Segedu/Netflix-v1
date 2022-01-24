import { useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import { HiOutlinePlusCircle } from "react-icons/hi";


const Details = ({ movieDetails }) => { 
    return (
        <div className="Details">
            <h1>details page</h1>
            <img src={movieDetails.posterUrl} />
            <h3>{movieDetails.title}</h3>
            <p>{movieDetails.actors}</p>
            <p>{movieDetails.year}</p>
            <p>{movieDetails.description ? description : ""}</p>
            <button>Play</button>
            <button onClick={() => addToList(data, movieDetails.id, watchList, setWatchList, "watchList")}><HiOutlinePlusCircle fontSize="xx-large" color="white" /></button>
            <button ><BsHandThumbsUp fontSize="xx-large" color="white" /></button>
        </div>)
}

export default Details;