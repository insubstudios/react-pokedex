import React from "react";
import { observer } from "mobx-react";

import store from "../store";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
  return (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {store.pokemon
        .filter((pokemon) =>
          pokemon.name.english
            .toLowerCase()
            .includes(store.filter.toLowerCase())
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

export default observer(PokemonTable);