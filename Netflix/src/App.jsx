import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import Home from './screens/Home/Home';
import Logout from './components/LogOut/LogOut';
import Login from './screens/LogIn/LogIn';
import Register from './screens/Register/Register';
import UserWatchList from './screens/UserWatchList/UserWatchList';
import Movies from './screens/Movies/Movies';
import TvSeries from './screens/TvSeries/TvSeries';
import Details from './screens/Details/Details';
import './App.css';

function App() {
  const [auth, setAuth] = useState("");
  const [data, error, isLoading] = useFetch("/data/data.json");
  const [watchList, setWatchList] = useState([]);
  const [movieDetails, setMovieDetails] = useState("");
  const [favoritesList, setFavoritesList] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          {auth ? (
            <>
              <Logout setAuth={setAuth} />
              <Redirect to="UserWatchList" />
              <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6-cXZHF9zeyx0mlcYdXCGm9WJs4dDDZclA&usqp=CAU" alt="" /></Link>
              <Link to="/UserWatchList">My Watch List <p className='watchListCounter'>{watchList.length ? watchList.length : ""}</p></Link>
              <Link to="/Movies">Movies</Link>
              <Link to="/TvSeries">Tv Series</Link>

            </>
          ) : <Redirect to="/" />}
          {!auth ? (
            <>
              <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6-cXZHF9zeyx0mlcYdXCGm9WJs4dDDZclA&usqp=CAU" alt="" /></Link>
              <Link to="/Movies">Movies</Link>
              <Link to="/TvSeries">Tv Series</Link>
              <Link to="/LogIn">Login</Link>
              <Link to="/Register">Register</Link>
              <Redirect to="/" />
            </>
          ) : <Redirect to="/" />}
        </nav>
        <Switch>
          <Route exact path="/" component={() => <Home favoritesList={favoritesList} setFavoritesList={setFavoritesList} setMovieDetails={setMovieDetails} data={data} watchList={watchList} setWatchList={setWatchList} />} />
          <Route exact path="/Login" component={() => <Login setAuth={setAuth} />} />
          <Route exact path="/Register" component={() => <Register setAuth={setAuth} />} />
          <Route exact path="/Movies" component={() => <Movies favoritesList={favoritesList} setFavoritesList={setFavoritesList} setMovieDetails={setMovieDetails} watchList={watchList} setWatchList={setWatchList} data={data} error={error} isLoading={isLoading} />} />
          <Route exact path="/TvSeries" component={() => <TvSeries setMovieDetails={setMovieDetails} watchList={watchList} setWatchList={setWatchList} favoritesList={favoritesList} setFavoritesList={setFavoritesList} data={data} error={error} isLoading={isLoading} />} />
          <Route exact path="/UserWatchList" component={() => <UserWatchList data={data} watchList={watchList} setWatchList={setWatchList} favoritesList={favoritesList} setFavoritesList={setFavoritesList} />} />
          <Route exact path="/Details" component={() => <Details data={data} watchList={watchList} setWatchList={setWatchList} movieDetails={movieDetails} setMovieDetails={setMovieDetails} />} />
        </Switch>
      </div>
    </BrowserRouter >
  )
}

export default App;
