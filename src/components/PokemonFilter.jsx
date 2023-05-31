import React from "react";
import styled from "@emotion/styled"
import useStore from "../store";

const FilterInput = styled.input`
  width: 100%;
  padding: 0.2em;
  border: 1px solid #555;
  border-radius: 0.25rem;
  font-size: x-large;
`;

const PokemonFilter = () => {
  const setFilter = useStore((state) => state.setFilter);
  const filter = useStore((state) => state.filter);
  
  return (
    <>
      <label>Filter:</label>
      <FilterInput
        type="text"
        value={filter}
        onChange={(evt) => setFilter(evt.target.value)}
      />
    </>
  );
};

export default PokemonFilter;