import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import "./App.css";

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <button onClick={() => onSelect(pokemon)}>Select</button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelect: PropTypes.func,
};

const PokemonInfo = ({ name, base, onClose }) => {
  const ClosePokemonInfoBtn = styled.button`
    margin-top: 0.5rem;
    float: right;
  `;

  return (
    <div className="pokemon-info">
      <h1>{name.english}</h1>
      <table>
        <tbody>
          {Object.keys(base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td className="pokemon-stat">{base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ClosePokemonInfoBtn onClick={() => onClose()}>Close</ClosePokemonInfoBtn>
    </div>
  );
};

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  border-bottom: 1px dashed #222;
`;

const Container = styled.div`
  background: #fee;
  width: 80vw;
  margin: 1rem auto;
  padding: 1rem;
`;

const ResultsPage = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const FilterInput = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2em;
`;

function App() {
  const [filter, filterSet] = React.useState("");
  const [pokemon, pokemonSet] = React.useState([]);
  const [selectedItem, selectedItemSet] = React.useState("");

  React.useEffect(() => {
    const url = "http://localhost:3000/react-pokedex/pokemon.json";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, []);

  return (
    <Container>
      <Title>Pokemon Search</Title>

      <ResultsPage>
        <div>
          <FilterInput
            value={filter}
            onChange={(evt) => filterSet(evt.target.value)}
          />

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                .filter((pokemon) =>
                  pokemon.name.english
                    .toLowerCase()
                    .includes(filter.toLowerCase())
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow
                    pokemon={pokemon}
                    onSelect={(pokemon) => selectedItemSet(pokemon)}
                    key={pokemon.id}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && (
          <PokemonInfo
            {...selectedItem}
            onClose={() => selectedItemSet(null)}
          />
        )}
      </ResultsPage>
    </Container>
  );
}

export default App;
