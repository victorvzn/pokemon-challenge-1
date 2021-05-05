export default {
  isLoading (state) {
    return state.isLoading
  },

  hasPokemons (state) {
    if (state.pokemonData) {
      return state.pokemonData.length > 0
    }
    return false
  },

  getPokemons: (state) => (keyword = '') => {
    let tempPokemons = state.pokemonData
    if (keyword) {
      tempPokemons = tempPokemons.filter(pokemon => {
        return pokemon.nameWithoutHyphens
          .toLowerCase()
          .includes(keyword.toLowerCase())
      })
    }
    return tempPokemons || []
  },

  getPokemonsFavorites: (state) => (keyword = '') => {
    let tempPokemons = state.pokemonData

    if (tempPokemons) {
      tempPokemons = tempPokemons.filter(pokemon => pokemon.isFavorite)

      if (keyword) {
        tempPokemons = tempPokemons.filter(pokemon => {
          return pokemon.nameWithoutHyphens
            .toLowerCase()
            .includes(keyword.toLowerCase())
        })
      }
    }

    return tempPokemons || []
  }
}
