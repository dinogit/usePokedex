import API from "@/api";

import { ref } from "vue";

export default function usePokemonsRepository() {
  const pokemons = ref([]);

  const getPokemons = async (page, limit) => {
    for (let i = page; i <= limit; i++) {
      await getPokemon(i);
    }
  };

  const getPokemon = async id => {
    const pokemon = await API.Pokemons.get(id);
    pokemons.value.push(pokemon.data);
  };

  return {
    pokemons,
    getPokemons
  };
}
