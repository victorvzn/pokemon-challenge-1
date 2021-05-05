<template>
  <div class="wrapper-list-all">
    <PokemonIsLoading
      v-if="isLoading" />

    <template v-if="!isLoading">
      <PokemonListSearch
        @onSearch="search" />
    </template>

    <PokemonMessage
      v-if="!isLoading && !hasPokemonsFiltered"
      title="Uh-oh!"
      description="You don't have favorites yet!"
      buttonDescription="Go back pokemon list"
      buttonRouteName="pokemon-list-all" />

    <PokemonList
      v-if="!isLoading || pokemonsFiltered"
      :data="pokemonsFiltered"
      :showButtonBackTop="false" />

    <PokemonListBottomBar v-if="!isLoading" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PokemonIsLoading from '@/components/pokemon-list/PokemonIsLoading.vue'
import PokemonMessage from '@/components/messages/PokemonMessage.vue'
import PokemonListSearch from '@/components/pokemon-list/PokemonListSearch.vue'
import PokemonList from '@/components/pokemon-list/PokemonList.vue'
import PokemonListBottomBar from '@/components/pokemon-list/PokemonListBottomBar.vue'

export default {
  name: 'PokemonListFavoritesView',
  data () {
    return {
      keyword: ''
    }
  },
  components: {
    PokemonIsLoading,
    PokemonMessage,
    PokemonListSearch,
    PokemonList,
    PokemonListBottomBar
  },
  computed: {
    ...mapGetters({
      isLoading: 'pokemons/isLoading',
      getPokemons: 'pokemons/getPokemonsFavorites'
    }),
    pokemonsFiltered () {
      return this.getPokemons(this.keyword)
    },
    hasPokemonsFiltered () {
      if (this.pokemonsFiltered) {
        return this.pokemonsFiltered.length > 0
      }
      return false
    }
  },
  methods: {
    search (keyword) {
      this.keyword = keyword
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper-list-all {
    margin-top: 130px;
    margin-bottom: 130px;
    z-index: 100;
  }
</style>
