import React from "react";
// import PropTypes from "prop-types";
import { Button } from "@mui/material";

import useStore from "../store";
// import PokemonType from "../PokemonType";

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

// PokemonRow.propTypes = {
//   pokemon: PropTypes.arrayOf(PokemonType),
// };

export default PokemonRow;