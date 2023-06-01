import React from "react";
import styled from "@emotion/styled"
import { observer } from "mobx-react";

import store from "../store";

const FilterInput = styled.input`
  width: 100%;
  padding: 0.2em;
  border: 1px solid #555;
  border-radius: 0.25rem;
  font-size: x-large;
`;

const PokemonFilter = () => {
  return (
    <>
      <label>Filter:</label>
      <FilterInput
        type="text"
        value={store.filter}
        onChange={(evt) => store.setFilter(evt.target.value)}
      />
    </>
  );
};

export default observer(PokemonFilter);