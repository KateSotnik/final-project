import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Spinner,
} from 'react-bootstrap';
import {
  POKE_DETAILS_DATE_OF_CATCH,
  POKE_DETAILS_ID,
  POKE_DETAILS_TYPES,
  POKE_DETAILS_WEIGHT,
  POKE_DETAILS_STATUS,
} from '../constants';
import { POKE_DETAILS_ABILITIES } from './../constants';

const PokeDetails = (props) => {
  let avatarUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.info.id}.png`;

  function checkDateOfCatch() {
    if (props.info.dateOfCatch) {
      return (
        <ListGroupItem className="list-group-item-info">
          {POKE_DETAILS_DATE_OF_CATCH} {`${props.info.dateOfCatch}`}
        </ListGroupItem>
      );
    }
  }
  function getPokeCard() {
    if (props.loading) {
      return (
        <div>
          <Spinner animation="border" role="status" size="lg" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      );
    } else
      return (
        <>
          <h1 className="pokeDetailsName">{`${props.info.name}`}</h1>
          <Row className="justify-content-md-left">
            <Col xs lg="4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="left" src={avatarUrl} />
                <Card.Body>
                  <Card.Title>{''}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs lg="4">
              <ListGroup className="list-group-flush">
                <ListGroupItem className="list-group-item-primary">
                  {' '}
                  {POKE_DETAILS_ID} {`${props.info.id}`}
                </ListGroupItem>
                <ListGroupItem className="list-group-item-secondary">
                  {POKE_DETAILS_ABILITIES} {`${props.info.abilities}`}
                </ListGroupItem>
                <ListGroupItem className="list-group-item-success">
                  {POKE_DETAILS_TYPES} {`${props.info.types}`}
                </ListGroupItem>
                <ListGroupItem className="list-group-item-danger">
                  {POKE_DETAILS_WEIGHT} {`${props.info.weight}`}
                </ListGroupItem>
                <ListGroupItem className="list-group-item-warning">
                  {POKE_DETAILS_STATUS} {`${props.info.status}`}{' '}
                </ListGroupItem>
                {checkDateOfCatch()}
              </ListGroup>
            </Col>
          </Row>
        </>
      );
  }
  return <Container className="detailsCardBody">{getPokeCard()}</Container>;
};

export default PokeDetails;
