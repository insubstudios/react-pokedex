import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { observer } from "mobx-react";

import store from "../store";
import PokemonType from "../PokemonType";

const PokemonInfo = () => {
  const ClosePokemonInfoBtn = styled.div`
    margin-top: 0.5rem;
    text-align: right;
  `;

  return store.selectedPokemon ? (
    <div className="pokemon-info">
      <h1>{store.selectedPokemon.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(store.selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td className="pokemon-stat">{store.selectedPokemon.base[key]}</td>
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
          onClick={() => store.setSelectedPokemon(null)}
        >
          Close
        </Button>
      </ClosePokemonInfoBtn>
    </div>
  ) : null;
};

PokemonInfo.propTypes = {
  pokemon: PokemonType,
};

export default observer(PokemonInfo);