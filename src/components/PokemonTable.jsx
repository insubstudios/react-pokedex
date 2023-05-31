import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const filter = useSelector((state) => state.filter);

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