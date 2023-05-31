import React from "react";
import styled from "@emotion/styled";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

const pokemonReducer = (
  state = {
    pokemon: [],
    filter: "",
    selectedPokemon: null,
  },
  action
) => {
  switch (action.type) {
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(pokemonReducer);

const Container = styled.div`
  background: #fee;
  width: 80vw;
  margin: 1rem auto;
  padding: 0.25rem 1rem 1.25rem;
  border-radius: 0.5rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  border-bottom: 1px dashed #222;
`;

const ResultsPage = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

function App() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  React.useEffect(() => {
    const url = "/react-pokedex/pokemon.json";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        })
      );
  }, []);

  if (!pokemon) {
    return <div>LOADING...</div>;
  }

  return (
    <Container>
      <Title>Pokemon Search</Title>
      <ResultsPage>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <PokemonInfo />
      </ResultsPage>
    </Container>
  );
}

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
