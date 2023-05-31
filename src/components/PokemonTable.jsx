import React, { useContext } from "react";

import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";

const PokemonTable = () => {
  const { state: { pokemon, filter }, dispatch } = useContext(PokemonContext);

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
        .map((p) => (
          <PokemonRow
            pokemon={p}
            onClick={(pokemon) => dispatch({
              type: "SET_SELECTED_POKEMON",
              payload: pokemon,
            })}
            key={p.id}
          />
        ))}
    </tbody>
    </table>
  );
};

export default PokemonTable;