import PokeCard from "./PokeCard";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import LoadButton from "./LoadButton";
import { useLocation } from "react-router-dom";

const PokeList = (props) => {
  const location = useLocation();

  function checkLoadButtonState() {
    if (!location.pathname.match('/caught')) {
      return <LoadButton />
    }
  }

  return (
    <Container fluid>
      <Row>
        {props.pokemonsToDisplay.map((pokemon, index) => (
          <Col key={index}>
            <PokeCard pokemon={pokemon} />
          </Col>
        ))}
      </Row>
      {checkLoadButtonState()}
    </Container>
  );
};
export default PokeList;
