import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

import PokemonType from "../PokemonType";
import PokemonContext from "../PokemonContext";

const PokemonRow = ({ pokemon }) => {
  const { selectedPokemonSet } = useContext(PokemonContext);

  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          size="small"
          variant="contained"
          onClick={() => selectedPokemonSet(pokemon)}
        >
          Select
        </Button>
      </td>
    </tr>
  );
};

PokemonRow.propTypes = {
  pokemon: PropTypes.arrayOf(PokemonType),
};

export default PokemonRow;