import React from "react";
import styled from "@emotion/styled";

import "./App.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

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

export default App;
