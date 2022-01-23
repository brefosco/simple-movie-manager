import React, { useContext, useState } from "react";
import { MovieContext } from "../App";
import { Row, Col, Card } from "react-bootstrap";
import AddIcon from "../resources/plus_icon.svg";
import SortIcon from "../resources/sort_icon.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./styles.css";

export const MovieList = (props) => {
  const { movies } = useContext(MovieContext);
  const [sortedMovies, setSortedMovies] = useState(
    movies === undefined ? [] : movies
  );
  const [orderBy, setOrderBy] = useState("Ascendent");

  const StyledCardBody = styled(Card.Body)`
    background-color: #455571;
  `;

  const StyledCard = styled(Card)`
    margin: 0.7em;
    text-align: center;
  `;

  const StyledNewMovie = styled.img`
    width: 3em;
    color: black;
  `;

  const StyledSort = styled.img`
    width: 2em;
    float: right;
  `;

  const StyledCardFooter = styled(Card.Footer)`
    background-color: #7d93b9;
  `;

  React.useEffect(() => {
    if (movies === undefined) {
      setSortedMovies([]);
    } else {
      setSortedMovies(movies);
    }
  }, [movies]);

  const handleSort = () => {
    const newMovies = [...movies];
    setOrderBy(orderBy === "Ascendent" ? "Descendent" : "Ascendent");
    if (orderBy === "Ascendent") {
      newMovies.sort((a, b) => {
        return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;
      });
    }
    if (orderBy === "Descendent") {
      newMovies.sort((a, b) => {
        return a.title > b.title ? -1 : b.title > a.title ? 1 : 0;
      });
    }
    setSortedMovies(newMovies);
  };

  return (
    <div className={props.key}>
      <Row>
        <Col>
          <Link to="/newmovie">
            <StyledNewMovie alt="new movie" src={AddIcon} />
          </Link>
        </Col>
        <Col>
          <StyledSort src={SortIcon} onClick={handleSort} alt="Sort by" />
        </Col>
      </Row>
      {sortedMovies?.map((movie, key) => (
        <Row>
          <Col key={key}>
            <StyledCard>
              <Link
                to={{ pathname: `/moviedetails`, state: movie }}
                className="goto-details"
              >
                <StyledCardBody>
                  <Card.Title>
                    {movie.title} ({movie.year})
                  </Card.Title>
                  <StyledCardFooter className="align-bottom">
                    <div>Details</div>
                  </StyledCardFooter>
                </StyledCardBody>
              </Link>
            </StyledCard>
          </Col>
        </Row>
      ))}
    </div>
  );
};
