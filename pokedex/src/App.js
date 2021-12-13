import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import DetailsPokemonPage from "./Pages/DetailsPokemonPage";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import NavBar from './components/Navbar';
import { Api } from './pokemonApi';
import { POKE_DETAILS_STATUS_FALSE } from './constants';

export const PokemonContext = createContext();

function App() {
  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [caughtPokemonsArray, setCaughtPokemonsArray] = useState([]);
  const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

  
  const getPokemons = async () => { 
    const response = await Api.getPokemons(nextPage);
    setNextPage(response.next);
      let pokemons = [];
      response.results.forEach((pokemon) => {
        pokemons.push({
          id: pokemon.url.split("/").slice(-2)[0],
          name: pokemon.name,
          url: pokemon.url,
          isCaught: false,
          dateOfCatch: {POKE_DETAILS_STATUS_FALSE},
        });
      });

      let fullPokemonsArray = [...pokemonsArray];
      fullPokemonsArray.push(...pokemons);
      setPokemonsArray(fullPokemonsArray);
    // });
  };

  useEffect(() => {
    getPokemons(nextPage);
  }, []);

  const providerValue = {
    pokemonsArray,
    setPokemonsArray,
    caughtPokemonsArray,
    setCaughtPokemonsArray,
    getPokemons,
    nextPage,
  };

  return (
    <BrowserRouter>
      <PokemonContext.Provider value={providerValue}>
        <div className="App">
        <NavBar />
          <Routes>
            <Route
              path="/"
              element={<MainPage pokemonsToDisplay={pokemonsArray} />}
            ></Route>
            <Route
              path="/caught"
              element={<MainPage pokemonsToDisplay={caughtPokemonsArray} />}
            ></Route>
            <Route path="/pokemon/:id" element={<DetailsPokemonPage />}></Route>
          </Routes>
        </div>
      </PokemonContext.Provider>
    </BrowserRouter>
  );
}

export default App;
