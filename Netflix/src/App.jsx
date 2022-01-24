import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
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

  return (
    <BrowserRouter>
      <div className="App">
        {auth ? (
          <>
            <Logout setAuth={setAuth} />
            <Redirect to="UserWatchList" />
            <Link to="/UserWatchList">My Watch List</Link>
            <Link to="/Movies">Movies</Link>
            <Link to="/TvSeries">Tv Series</Link>
          </>
        ) : <Redirect to="/" />}
        {!auth ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/LogIn">Login</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Movies">Movies</Link>
            <Link to="/TvSeries">Tv Series</Link>
            <Redirect to="/" />
          </>
        ) : <Redirect to="/" />}
        <Switch>
          <Route exact path="/" component={() => <Home setMovieDetails={setMovieDetails} data={data} watchList={watchList} setWatchList={setWatchList} />} />
          <Route exact path="/Login" component={() => <Login setAuth={setAuth} />} />
          <Route exact path="/Register" component={() => <Register setAuth={setAuth} />} />
          <Route exact path="/Movies" component={() => <Movies setMovieDetails={setMovieDetails} watchList={watchList} setWatchList={setWatchList} data={data} error={error} isLoading={isLoading} />} />
          <Route exact path="/TvSeries" component={() => <TvSeries setMovieDetails={setMovieDetails} watchList={watchList} setWatchList={setWatchList} data={data} error={error} isLoading={isLoading} />} />
          <Route exact path="/UserWatchList" component={() => <UserWatchList watchList={watchList} setWatchList={setWatchList} />} />
          <Route exact path="/Details" component={() => <Details movieDetails={movieDetails} setMovieDetails={setMovieDetails} />} />
        </Switch>
      </div>
    </BrowserRouter >
  )
}

export default App;
