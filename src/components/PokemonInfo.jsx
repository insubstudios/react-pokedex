import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import PokemonType from "../PokemonType";

const PokemonInfo = ({ name, base, onClose }) => {
  const ClosePokemonInfoBtn = styled.div`
    margin-top: 0.5rem;
    text-align: right;
  `;

  return (
    <div className="pokemon-info">
      <h1>{name.english}</h1>
      <table>
        <tbody>
          {Object.keys(base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td className="pokemon-stat">{base[key]}</td>
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
          onClick={() => onClose()}
        >
          Close
        </Button>
      </ClosePokemonInfoBtn>
    </div>
  );
};

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;