import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import useStore from "../store";
// import PokemonType from "../PokemonType";

const PokemonInfo = () => {
  const selectedPokemon = useStore((state) => state.selectedPokemon);
  const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);

  const ClosePokemonInfoBtn = styled.div`
    margin-top: 0.5rem;
    text-align: right;
  `;

  return selectedPokemon ? (
    <div className="pokemon-info">
      <h1>{selectedPokemon.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td className="pokemon-stat">{selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ClosePokemonInfoBtn>
        <Button
          style={{ flex: 1 }}
          variant="contained"
          size="small"
          startIcon={<CancelIcon />}
          onClick={() => setSelectedPokemon(null)}
        >
          Close
        </Button>
      </ClosePokemonInfoBtn>
    </div>
  ) : null;
};

// PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;