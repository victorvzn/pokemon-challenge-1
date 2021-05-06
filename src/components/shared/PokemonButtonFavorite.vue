<template>
  <BaseButtonIcon
    @click="onToggleFavorite(data.slug)"
    :class="{ 'active': data.isFavorite }">
    <IconStarGold :class="{ 'bounceIn': data.isFavorite }" v-if="data.isFavorite" />
    <IconStarSilver v-else />
  </BaseButtonIcon>
</template>

<script>
export default {
  name: 'PokemonButtonFavorite',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    onToggleFavorite (slug) {
      this.$store.commit('pokemons/SET_TOGGLE_FAVORITE', { slug })
    }
  }
}
</script>
