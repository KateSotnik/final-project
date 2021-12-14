import React from 'react';
import { Container } from 'react-bootstrap';
import PokeList from './../components/PokeList';

const MainPage = (props) => {
  return (
    <Container fluid>
      <div className="mainPageContainer">
        <PokeList pokemonsToDisplay={props.pokemonsToDisplay} />
      </div>
    </Container>
  );
};

export default MainPage;
