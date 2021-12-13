import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { PokemonContext } from "./../App";
import { BUTTON_LOAD_MORE_TEXT } from "./../constants";

const LoadButton = (props) => {
  const { getPokemons } = useContext(PokemonContext);
  return (
    <Button
      onClick={() => {
        getPokemons();
      }}
      variant="primary"
      size="lg"
    >
      {BUTTON_LOAD_MORE_TEXT}{" "}
    </Button>
  );
};

export default LoadButton;
