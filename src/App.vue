<template>
  <div class="utilities">
    <div class="filter--container"></div>
  </div>
  <div id="nav">
    <router-link to="/">Pokemons</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
