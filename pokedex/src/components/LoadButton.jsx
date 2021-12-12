import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { PokemonContext } from './../App';

const LoadButton = (props) => {
  const { getPokemons, nextPage } = useContext(PokemonContext);
  return (
    <Button
      onClick={() => {
        getPokemons(nextPage);
      }}
      variant="primary"
      // disabled={'isNextPage'}
      size="lg"
    >
      Load more...
    </Button>
  );
};

export default LoadButton;
