<template>
  <div class="PokemonIsLoading">
    <IconPokeball />
  </div>
</template>

<script>
import IconPokeball from '@/components/icons/IconPokeball.vue'

export default {
  name: 'PokemonIsLoading',
  components: { IconPokeball }
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
