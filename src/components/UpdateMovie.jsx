import React, { useState, useContext } from "react";
import { MovieContext, updateLocalStorage } from "../App";
import { useLocation, Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import BackIcon from "../resources/back_icon.svg";
import "./styles.css";

const UpdateMovie = () => {
  const location = useLocation();
  const history = useHistory();
  const { movies, setMovies, counter, setCounter } = useContext(MovieContext);

  const [isUpdate, setIsUpdate] = useState(false);
  const [title, setTitle] = useState("");
  const [crew, setCrew] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState();
  const [personalOpinion, setPersonalOpinion] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  React.useEffect(() => {
    if (location.state) {
      setIsUpdate(true);
      setTitle(location.state.title);
      setRating(location.state.rating);
      setCrew(location.state.crew);
      setYear(location.state.year);
      setPersonalOpinion(location.state.personalOpinion);
      // setImageUrl(location.state.image)
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovies = !movies ? [] : movies;

    if (isUpdate) {
      const movie = {
        key: location.state.key,
        title: title,
        rating: rating,
        crew: crew,
        year: year,
        personalOpinion: personalOpinion,
        // imageUrl: imageUrl, TODO: Implement
      };
      const currentMovie = movies.findIndex(
        (movie) => movie.key === location.state.key
      );

      console.log("updating");
      newMovies[currentMovie] = movie;
      updateLocalStorage("myMovies", newMovies);
      setMovies(newMovies);

      history.push("/");
    } else {
      const movie = {
        key: counter,
        title: title,
        rating: rating,
        crew: crew,
        year: year,
        personalOpinion: personalOpinion,
        // imageUrl: imageUrl, TODO: Implement
      };
      newMovies.push(movie);
      updateLocalStorage("myMovies", newMovies);
      updateLocalStorage("localCounter", counter + 1);
      setCounter(counter + 1);
      setMovies(newMovies);
      history.push("/");
    }
  };

  return (
    <div>
      <section>
        <Form onSubmit={handleSubmit}>
          <Link to="/">
            <img src={BackIcon} alt="back" className="icon" />
          </Link>
          <div className="title">
            <h1>{isUpdate ? "Update movie" : "Add new movie"}</h1>
          </div>
          <Row>
            <Col>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Crew"
                value={crew}
                onChange={(e) => setCrew(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                className="form-input"
                type="number"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                className="form-input"
                type="number"
                min={1}
                max={10}
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <textarea
                className="form-input w-100 form-control"
                rows={4}
                placeholder="Your own personal opinion of the movie/show"
                onChange={(e) => setPersonalOpinion(e.target.value)}
                value={personalOpinion}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div>
                <Button className="full-width" type="submit">
                  {isUpdate ? "Update" : "Add"}
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </section>
    </div>
  );
};

export default UpdateMovie;
