<template>
  <div class="pokedex">
    <card
      v-for="pokemon in pokemons"
      :pokemon="pokemon"
      :key="pokemon.id"
    ></card>
  </div>
</template>

<script>
// @ is an alias to /src

import Card from '@/components/Card';

import usePokemonsRepository from '@/composables/usePokemonsRepository';

import { onMounted, onUnmounted } from 'vue';

export default {
  name: 'Home',
  components: { Card },
  setup() {
    const { pokemons, getPokemons } = usePokemonsRepository();

    let page = 1;
    let limit = 20;

    onMounted(() => {
      getPokemons(page, limit);
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        getPokemons((page += 20), (limit += page - 1));
      }
    };

    return {
      pokemons,
    };
  },
};
</script>

<style lang="scss" scoped>
.pokedex {
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
}
</style>
