import { makeAutoObservable } from "mobx";

class Store {
  pokemon = [];
  filter = "";
  selectedPokemon = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  setSelectedPokemon(selectedPokemon) {
    this.selectedPokemon = selectedPokemon;
  }
}

const store = new Store();

const url = "/react-pokedex/pokemon.json";
fetch(url)
  .then((resp) => resp.json())
  .then((pokemon) => store.setPokemon(pokemon));

export default store;
