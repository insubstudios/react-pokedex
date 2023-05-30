import React, { useContext } from "react";
import styled from "@emotion/styled";
import PokemonContext from "../PokemonContext";

const FilterInput = styled.input`
  width: 100%;
  padding: 0.2em;
  border: 1px solid #555;
  border-radius: 0.25rem;
  font-size: x-large;
`;

const PokemonFilter = () => {
  const { filter, filterSet } = useContext(PokemonContext);
  return (
    <>
      <label>Filter:</label>
      <FilterInput
        type="text"
        value={filter}
        onChange={(evt) => filterSet(evt.target.value)}
      />
    </>
  );
};

export default PokemonFilter;