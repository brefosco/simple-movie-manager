import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import BackIcon from "../resources/back_icon.svg";
import "./styles.css";

const UpdateMovie = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [crew, setCrew] = useState();
  const [rating, setRating] = useState("");
  const [year, setYear] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  React.useEffect(() => {
    if (location.state) {
      setIsUpdate(true);
      setTitle(location.state.title);
      setRating(location.state.imDbRating);
      setCrew(location.state.crew);
      setYear(location.state.year);
      // setImageUrl(location.state.image)
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = {
      title: title,
      rating: rating,
      crew: crew,
      year: year,
      imageUrl: imageUrl,
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
