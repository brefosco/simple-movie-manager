import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const Title = (props) => {
  const StyledDiv = styled.div`
    margin: 1em;
    text-align: center;
    color: black;
  `;
  return (
    <div className={props.id}>
      <Row>
        <Col>
          <StyledDiv>
            <h1>Movie manager! </h1>
          </StyledDiv>
        </Col>
      </Row>
    </div>
  );
};

export default Title;
