import React, { useEffect, useState, useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import PokeDetails from '../components/PokeDetails';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../App';
import {
  POKE_DETAILS_STATUS_TRUE,
  POKE_DETAILS_STATUS_FALSE,
} from '../constants';
import { Api } from './../pokemonApi';

const DetailsPokemonPage = () => {
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  const [info, setInfo] = useState({});
  const { caughtPokemonsArray } = useContext(PokemonContext);

  useEffect(() => {
    let caughtPokemon = caughtPokemonsArray.find(
      (pokemon) => pokemon.id === id
    );
    let captureStatus = caughtPokemon
      ? `${POKE_DETAILS_STATUS_TRUE}`
      : `${POKE_DETAILS_STATUS_FALSE}`;
    let dateOfCatch = caughtPokemon?.dateOfCatch;

    const getPokemons = async () => {
      setLoading(true);
      const caughtPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const response = await Api.getPokemons(caughtPokemonUrl);

      let obj = {
        name: response.name,
        weight: response.weight,
        id: response.id,
        abilities: response.abilities.map((element) => {
          return [' ' + element.ability.name];
        }),
        types: response.types.map((element) => {
          return [' ' + element.type.name];
        }),
        status: captureStatus,
        dateOfCatch: dateOfCatch,
      };
      setInfo(obj);
      setLoading(false);
    };
    getPokemons();
  }, []);

  return (
    <Container fluid>
      <Row> </Row>
      <PokeDetails info={info} loading={loading} />
    </Container>
  );
};

export default DetailsPokemonPage;
