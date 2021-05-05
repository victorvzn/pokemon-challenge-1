<template>
  <div class="wrapper-list-bottom-bar">
    <BaseButton
      class="btn btn-normal"
      @click="onPokemonList"
      :isDisabled="$route.name !== 'pokemon-list-all'">
      <IconList />
      <span>All</span>
    </BaseButton>

    <BaseButton
      class="btn btn-normal"
      @click="onPokemonFavoriteList"
      :isDisabled="$route.name !== 'pokemon-list-favorites'">
      <IconStarWhite />
      <span>Favorites</span>
    </BaseButton>
  </div>
</template>

<script>
import IconList from '@/components/icons/IconList.vue'
import IconStarWhite from '@/components/icons/IconStarWhite.vue'

export default {
  name: 'PokemonListBottomBar',
  components: { IconList, IconStarWhite },
  methods: {
    onPokemonList () {
      this.$router.push({ name: 'pokemon-list-all' }).catch(() => {})
    },
    onPokemonFavoriteList () {
      this.$router.push({ name: 'pokemon-list-favorites' }).catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper-list-bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: var(--white);
    box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

  }
</style>
