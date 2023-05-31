import React from "react";
import { useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import { Button } from "@mui/material";

// import PokemonType from "../PokemonType";

const PokemonRow = ({ pokemon }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          size="small"
          variant="contained"
          onClick={() => dispatch({
            type: "SET_SELECTED_POKEMON",
            payload: pokemon,
          })}
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