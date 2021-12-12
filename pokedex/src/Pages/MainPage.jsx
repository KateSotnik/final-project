import React, { useEffect, useState } from "react";
import NavBar from "./../components/Navbar";
import LoadButton from "./../components/LoadButton";
import { Container, Row } from "react-bootstrap";
import PokeList from "./../components/PokeList";

const MainPage = (props) => {
  return (
    <Container fluid>
      <Row>
        {" "}
        <NavBar />
      </Row>
      <h1 className="mainPageHeader">All Pokemons</h1>
      <Row>
        {" "}
        <PokeList pokemonsToDisplay={props.pokemonsToDisplay} />
      </Row>
    </Container>
  );
};

export default MainPage;
