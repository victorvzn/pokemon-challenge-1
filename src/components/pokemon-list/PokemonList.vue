<template>
  <div class="wrapper-list">
    <PokemonListItem
      v-for="(item, index) in data"
      :key="index"
      :data="item"
    />
    <div class="TheEnd text-center" v-show="showButtonBackTop">
      <h2>The end.</h2>
      <BaseButton
        class="btn btn-normal"
        @click="backToTop">
        Back to top
      </BaseButton>
    </div>
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
    },
    showButtonBackTop: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    backToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper-list {
    padding: 0 30px;
  }

  .TheEnd {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    .wrapper-list {
      margin: 0 auto;
      padding: 0 0;
      width: 570px;
    }
  }
</style>
