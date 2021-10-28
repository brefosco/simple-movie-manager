import React, { createContext, useState, useEffect } from "react";
import Title from "./components/Title";
import { MovieList } from "./components/MovieList";
import { Movie } from "./components/Movie";
import UpdateMovie from "./components/UpdateMovie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getData } from "./services/moviesService";

export const MovieContext = createContext({
  movies: [],
  setMovies: () => {},
});

function App() {
  const [movies, setMovies] = useState();

  const getDataLocal = async () => {
    return await getData();
  };

  useEffect(() => {
    getDataLocal().then((data) => {
      setMovies(data.data);
    });
  }, []);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
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
