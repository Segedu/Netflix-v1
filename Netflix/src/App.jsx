import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import Home from './screens/Home/Home';
import Login from './screens/LogIn/LogIn';
import Register from './screens/Register/Register';
import UserWatchList from './screens/UserWatchList/UserWatchList'
import Movies from './screens/Movies/Movies';
import TvSeries from './screens/TvSeries/TvSeries';
import './App.css'

function App() {
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
          <Route exact path="/Movies" component={() => <Movies watchList={watchList} setWatchList={setWatchList} />} />
          <Route exact path="/TvSeries" component={() => <TvSeries />} />
          <Route exact path="/UserWatchList" component={() => <UserWatchList />} />
          <Route exact path="/Details" component={() => <Details />} />
        </Switch>
      </div>
    </BrowserRouter >
  )
}

export default App;
