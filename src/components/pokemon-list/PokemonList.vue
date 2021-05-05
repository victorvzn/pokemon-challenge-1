<template>
  <div class="wrapper-list">
    <PokemonListItem
      v-for="(item, index) in data"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script>

import PokemonListItem from '@/components/pokemon-list/PokemonListItem.vue'

export default {
  name: 'PokemonList',
  components: { PokemonListItem },
  props: {
    data: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper-list {
    padding: 0 30px;
  }
</style>
