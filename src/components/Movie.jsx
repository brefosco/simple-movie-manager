import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { MovieContext } from "../App";
import { useHistory } from "react-router-dom";
import { updateLocalStorage } from "../App";
import EditIcon from "../resources/edit_icon.svg";
import BackIcon from "../resources/back_icon.svg";
import DeleteIcon from "../resources/delete_icon.svg";
import { useLocation, Link } from "react-router-dom";
import "./styles.css";

export const Movie = (props) => {
  const location = useLocation();
  const history = useHistory();
  const data = location.state;

  const { movies, setMovies } = useContext(MovieContext);

  function deleteMovie() {
    const newMovies = movies.filter((movie) => movie.key !== data.key);
    updateLocalStorage("myMovies", newMovies);
    setMovies(newMovies);
    history.push("/");
  }

  return (
    <div className="container">
      <Row>
        <Row>
          <Col>
            <Link to="/">
              <img src={BackIcon} alt="back" className="icon" />
            </Link>
          </Col>
          <Col>
            <Link to={{ pathname: `/newmovie`, state: data }}>
              <img alt="edit movie" src={EditIcon} className="icon right" />
            </Link>
            <div
              onClick={(e) => {
                deleteMovie(e);
              }}
            >
              <img alt="delete movie" src={DeleteIcon} className="icon right" />
            </div>
          </Col>
        </Row>
      </Row>
      <Row>
        <Col>
          <div className="data-col">
            <h1>{data?.title}</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="data-col">
            <h2>Release year: {data?.year}</h2>
          </div>
          {/* <div className="data-col">
            <img alt="movie" src={data?.image} />
          </div> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="data-col">
            <h4> Crew:</h4>
            <p>{data?.crew}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="data-col">
            <h3>IMDB Rating: {data?.rating}</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="data-col">
            <h3>Personal opinion</h3>
            <p>{data?.personalOpinion}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
