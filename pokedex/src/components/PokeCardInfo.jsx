import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import useContext from "react";

const PokeCardInfo = (props) => {
  let avatarUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.info.id}.png`;

  function checkDateOfCatch() {
    if (props.info.dateOfCatch) {
      return (
        <ListGroupItem>
          Date of catch: {`${props.info.dateOfCatch}`}
        </ListGroupItem>
      );
    }
  }

  return (
    <Container>
      <h1>{`${props.info.name}`}</h1>
      <Row className="justify-content-md-left">
        <Col xs lg="4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="left" src={avatarUrl} />
            <Card.Body>
              <Card.Title>{""}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg="4">
          <ListGroup className="list-group-flush">
            <ListGroupItem>Id: {`${props.info.id}`}</ListGroupItem>
            <ListGroupItem>
              Abilities: {`${props.info.abilities}`}
            </ListGroupItem>
            <ListGroupItem>Types: {`${props.info.types}`}</ListGroupItem>
            <ListGroupItem>Weight: {`${props.info.weight}`}</ListGroupItem>
            <ListGroupItem>Status: {`${props.info.status}`} </ListGroupItem>
            {checkDateOfCatch()}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default PokeCardInfo;
