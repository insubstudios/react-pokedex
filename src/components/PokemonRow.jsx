import React from "react";
import { Button } from "@mui/material";
import { observer } from "mobx-react";

import store from "../store";
import PokemonType from "../PokemonType";

const PokemonRow = ({ pokemon }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          size="small"
          variant="contained"
          onClick={() => store.setSelectedPokemon(pokemon)}
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

export default observer(PokemonRow);