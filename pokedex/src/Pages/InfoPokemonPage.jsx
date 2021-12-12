import React, { useEffect, useState, useContext } from "react";
import NavBar from "./../components/Navbar";
import { Container, Row } from "react-bootstrap";
import PokeCardInfo from "../components/PokeCardInfo";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PokemonContext } from "./../App";

const InfoPokemonPage = () => {
  let { id } = useParams();
  const [info, setInfo] = useState({});
  // const [avatar, setAvatar] = useState(
  //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  // );
  const { caughtPokemonsArray } = useContext(PokemonContext);

  useEffect(() => {
    let caughtPokemon = caughtPokemonsArray.find((pokemon) => pokemon.id === id);
    let captureStatus = caughtPokemon ? "Captured" : "Not captured";
    let dateOfCatch = caughtPokemon?.dateOfCatch;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      let obj = {
        name: response.data.name,
        weight: response.data.weight,
        id: response.data.id,
        abilities: response.data.abilities.map((element) => {
          return [" " + element.ability.name];
        }),
        types: response.data.types.map((element) => {
          return [" " + element.type.name];
        }),
        status: captureStatus,
        dateOfCatch: dateOfCatch,
      };
      setInfo(obj);
    });
  }, []);

  return (
    <Container fluid>
      <Row>
        {" "}
        <NavBar />
      </Row>
      <PokeCardInfo info={info} />
    </Container>
  );
};

export default InfoPokemonPage;
