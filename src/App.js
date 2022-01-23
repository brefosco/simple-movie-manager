import React, { createContext, useState, useEffect } from "react";
import Title from "./components/Title";
import { MovieList } from "./components/MovieList";
import { Movie } from "./components/Movie";
import UpdateMovie from "./components/UpdateMovie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
// import { getData } from "./services/moviesService";

export const MovieContext = createContext({
  counter: 0,
  setCounter: () => {},
  movies: [],
  setMovies: () => {},
});

// TODO: Add functionality to upload picture. WHERE?

export function updateLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function App() {
  const [movies, setMovies] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const moviesFromCache = localStorage.getItem("myMovies");
    const localCounter = localStorage.getItem("localCounter");
    const parsedData = JSON.parse(moviesFromCache);
    const parsedCounter = JSON.parse(localCounter);
    parsedData && setMovies(parsedData);
    parsedCounter && setCounter(parsedCounter);
  }, []);

  React.useEffect(() => {
  }, [movies]);

  return (
    <MovieContext.Provider value={{ movies, setMovies, counter, setCounter }}>
      <div className="App">
        <Container>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Title />
                <MovieList />
              </Route>
              <Route path="/newmovie">
                <UpdateMovie />
              </Route>
              <Route path="/moviedetails">
                <Movie />
              </Route>
            </Switch>
          </Router>
        </Container>
      </div>
    </MovieContext.Provider>
  );
}

export default App;
