export default {
  isDataLoaded (state) {
    return state.dataLoaded
  },

  isLoading (state) {
    return state.isLoading
  },

  isLoadingDetail (state) {
    return state.isLoadingDetail
  },

  hasPokemons (state) {
    if (state.pokemonsData) {
      return state.pokemonsData.length > 0
    }
    return false
  },

  getPokemons: (state) => (keyword = '') => {
    let tempPokemons = state.pokemonsData
    if (keyword) {
      tempPokemons = tempPokemons.filter(pokemon => {
        return pokemon.name
          .toLowerCase()
          .includes(keyword.toLowerCase())
      })
    }
    return tempPokemons || []
  },

  getPokemon (state) {
    return state.pokemonDataSelected
  },

  getPokemonsFavorites: (state) => (keyword = '') => {
    let tempPokemons = state.pokemonsData

    if (tempPokemons) {
      tempPokemons = tempPokemons.filter(pokemon => pokemon.isFavorite)

      if (keyword) {
        tempPokemons = tempPokemons.filter(pokemon => {
          return pokemon.name
            .toLowerCase()
            .includes(keyword.toLowerCase())
        })
      }
    }

    return tempPokemons || []
  }
}
