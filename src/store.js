import { makeObservable, observable, computed, action } from "mobx";

class Store {
  pokemon = [];
  filter = "";
  selectedPokemon = null;

  constructor() {
    makeObservable(this, {
      pokemon: observable,
      filter: observable,
      selectedPokemon: observable,
      filteredPokemon: computed,
      setPokemon: action,
      setFilter: action,
      setSelectedPokemon: action,
    });
  }

  get filteredPokemon() {
    return this.pokemon.filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(this.filter.toLowerCase())
    );
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
