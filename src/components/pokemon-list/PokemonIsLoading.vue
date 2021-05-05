<template>
  <div class="PokemonIsLoading">
    <IconPokeball class="spinner" />
  </div>
</template>

<script>
export default {
  name: 'PokemonIsLoading'
}
</script>

<style lang="scss" scoped>
  .PokemonIsLoading {
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
