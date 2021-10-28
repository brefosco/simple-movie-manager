import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import BackIcon from "../resources/back_icon.svg";
import "./styles.css";

const UpdateMovie = () => {
  const [title, setTitle] = useState("");
  const [cast, setCast] = useState();
  const [rating, setRating] = useState("");
  const [genres, setGenres] = useState();
  const [year, setYear] = useState();
  const location = useLocation();
  const [isUpdate, setIsUpdate] = useState(false);

  React.useEffect(() => {
    if (location.state) {
      setIsUpdate(true);
      setTitle(location.state.primaryTitle);
      setRating(location.state.rating);
      setCast(location.state.cast.map((person) => person.actor));
      setYear(location.state.startYear);
      setGenres(location.state.genres);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = {
      title: title,
      rating: rating,
      cast: cast,
      year: year,
      genres: genres,
    };
    console.log(movie);
    alert(movie.title);
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
                placeholder="Cast"
                value={cast}
                onChange={(e) => setCast(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                className="form-input"
                type="number"
                placeholder="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </Col>
          </Row>
          <Col>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Genres"
              value={genres}
              onChange={(e) => setGenres(e.target.value)}
            />
          </Col>
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
