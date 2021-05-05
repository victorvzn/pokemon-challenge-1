const removeHyphens = (text) => text.replace(/-/g, ' ')

export default {
  SET_ISLOADING (state, payload) {
    state.isLoading = payload
  },
  SET_POKEMON_DATA (state, payload) {
    state.pokemonData = payload.results.map(pokemon => ({
      name: pokemon.name,
      nameWithoutHyphens: removeHyphens(pokemon.name),
      isFavorite: false
    }))
  },
  SET_TOGGLE_FAVORITE (state, payload) {
    const pokemons = state.pokemonData
    if (pokemons) {
      const pokemonSelected = pokemons.find(pokemon => pokemon.name === payload.name)

      if (pokemonSelected) {
        pokemonSelected.isFavorite = !pokemonSelected.isFavorite
      }
    }
  }
}
