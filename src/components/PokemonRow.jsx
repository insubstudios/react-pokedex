import React from "react";
import { Button } from "@mui/material";

import useStore from "../store";
import PokemonType from "../PokemonType";

const PokemonRow = ({ pokemon }) => {
  const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);

  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          size="small"
          variant="contained"
          onClick={() => setSelectedPokemon(pokemon)}
        >
          Select
        </Button>
      </td>
    </tr>
  );
};

PokemonRow.propTypes = {
  pokemon: PokemonType,
};

export default PokemonRow;