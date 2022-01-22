import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Home from './screens/Home/Home';
import Login from './screens/LogIn/LogIn';
import Register from './screens/Register/Register';
import UserWatchList from './screens/UserWatchList/UserWatchList';
import Movies from './screens/Movies/Movies';
import TvSeries from './screens/TvSeries/TvSeries';
import './App.css';

function App() {
  const [moviesData, error, isLoading] = useFetch("/data/moviesDB.json");
  const [tvShowsData, tvShowsError, tvShowsIsLoading] = useFetch("/data/tvSeriesDB.json");
  const [watchList, setWatchList] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Link to="/">Home</Link>
          <Link to="/LogIn">Login</Link>
          <Link to="/Register">Register</Link>
          <Link to="/Movies">Movies</Link>
          <Link to="/TvSeries">Tv shows</Link>
          <Link to="/UserWatchList">Watch List</Link>
          <Redirect to="/" />
        </>
        <>
          {/* <Link to="/">Home</Link> */}
        </>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/Login" component={() => <Login />} />
          <Route exact path="/Register" component={() => <Register />} />
          <Route exact path="/Movies" component={() => <Movies watchList={watchList} setWatchList={setWatchList} moviesData={moviesData} error={error} isLoading={isLoading} />} />
          <Route exact path="/TvSeries" component={() => <TvSeries watchList={watchList} setWatchList={setWatchList} tvShowsData={tvShowsData} tvShowsError={tvShowsError} tvShowsIsLoading={tvShowsIsLoading} />} />
          <Route exact path="/UserWatchList" component={() => <UserWatchList watchList={watchList} setWatchList={setWatchList} />} />
          <Route exact path="/Details" component={() => <Details />} />
        </Switch>
      </div>
    </BrowserRouter >
  )
}

export default App;
