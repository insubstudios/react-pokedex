import React from "react";

import PokemonRow from "./PokemonRow";
// import PokemonContext from "../PokemonContext";

const PokemonTable = ({ filter, pokemon, selectedPokemonSet }) => (
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
          onSelect={(pokemon) => selectedPokemonSet(pokemon)}
          key={pokemon.id}
        />
      ))}
  </tbody>
  </table>
)

export default PokemonTable;