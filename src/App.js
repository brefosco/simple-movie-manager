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
  allMovies: [],
  setAllMovies: () => {},
});

// TODO: Add functionality to upload picture. WHERE? 

function App() {
  const [movies, setMovies] = useState();
  const [allMovies, setAllMovies] = useState();

  const getDataLocal = async () => {
    // const response = await getData()
    const response = await getData();
    console.log(response.data);
    setAllMovies(response.data.items);
    return response.data.items.slice(0, 10);
  };

  useEffect(() => {
    getDataLocal().then((data) => {
      console.log(data);
      data && setMovies(data);
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
