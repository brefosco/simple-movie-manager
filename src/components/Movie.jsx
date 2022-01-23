import React from "react";
import { Col, Row } from "react-bootstrap";
import EditIcon from "../resources/edit_icon.svg";
import BackIcon from "../resources/back_icon.svg";
import DeleteIcon from "../resources/delete_icon.svg";
import { useLocation, Link } from "react-router-dom";
import "./styles.css";

export const Movie = (props) => {
  const location = useLocation();
  const data = location.state;

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
            <img alt="delete movie" src={DeleteIcon} className="icon right" />
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
          <div className="data-col">
            <h4>IMDB rank: {data?.rank}</h4>
          </div>
          <div className="data-col">
            <img alt="movie" src={data?.image} />
          </div>
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
            <h3>IMDB Rating: {data?.imDbRating}</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};
