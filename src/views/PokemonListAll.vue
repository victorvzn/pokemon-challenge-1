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
      description="You look lost on your journey!"
      buttonDescription="Go back home"
      buttonRouteName="welcome" />

    <PokemonList
      v-if="!isLoading && pokemonsFiltered"
      :data="pokemonsFiltered"
      :showButtonBackTop="hasPokemonsMoreThan20" />

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
  name: 'PokemonListAllView',
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
      getPokemons: 'pokemons/getPokemons',
      hasPokemons: 'pokemons/hasPokemons'
    }),
    pokemonsFiltered () {
      return this.getPokemons(this.keyword)
    },
    hasPokemonsMoreThan20 () {
      if (this.pokemonsFiltered) {
        return this.pokemonsFiltered.length > 20
      }
      return false
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
    margin-bottom: 110px;
  }
</style>
