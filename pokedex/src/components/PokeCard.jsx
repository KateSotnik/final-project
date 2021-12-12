import { useContext } from "react";
import { Card, Button, Nav } from "react-bootstrap";
import { PokemonContext } from "./../App";
import { Link } from "react-router-dom";

const PokeCard = (props) => {
  const {
    pokemonsArray,
    setPokemonsArray,
    caughtPokemonsArray,
    setCaughtPokemonsArray,
  } = useContext(PokemonContext);

  const changePokeStatus = (pokemonItem) => {
    //в массиве pokemonsArray - поменять флаг isCaught на true
    pokemonItem.isCaught = true;
    let newArray = [...pokemonsArray];
    let foundIndex = newArray.findIndex(
      (el) => el.id === pokemonItem.id
    );
    newArray[foundIndex] = pokemonItem;
    setPokemonsArray(newArray);

    //задать покемону дату поимки и добавить текущего покемона в массив caughtPokemonsArray
    let dateOfCatch = new Date().toLocaleString();
    pokemonItem.dateOfCatch = dateOfCatch;
    setCaughtPokemonsArray(array => [...array, pokemonItem]);
  };

  return (
    <Card className="pokeCard text-center">
      <Link to={`/pokemon/${props.pokemon.id}`}>
        <Card.Img
          className="pokeCardImg"
          variant="top"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`}
        />
        <Card.Body>
          <Card.Title>Name: {props.pokemon.name}</Card.Title>
          <Card.Text>Id: {props.pokemon.id}</Card.Text>
        </Card.Body>
      </Link>
      <Button
        className="pokeCardButton"
        onClick={() => changePokeStatus(props.pokemon)}
        variant="primary"
        disabled={props.pokemon.isCaught}
      >
        Catch me!
      </Button>
    </Card>
  );
};

export default PokeCard;
