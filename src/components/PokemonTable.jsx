import React from "react";

import useStore from "../store";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
  const pokemon = useStore((state) => state.pokemon);
  const filter = useStore((state) => state.filter);

  return (
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
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
    </tbody>
    </table>
  );
};

export default PokemonTable;