import { removeHyphens, arrayWithCommas } from '../helpers'

export default {
  SET_ISLOADING (state, payload) {
    state.isLoading = payload
  },
  SET_ISLOADING_DETAIL (state, payload) {
    state.isLoadingDetail = payload
  },
  SET_POKEMONS_DATA (state, payload) {
    state.pokemonsData = payload.results.map(pokemon => ({
      slug: pokemon.name,
      name: removeHyphens(pokemon.name),
      isFavorite: false
    }))
  },
  SET_POKEMON_DATA (state, payload) {
    const types = payload.types.map(type => (type.type.name))
    const image = payload.sprites.other['official-artwork'].front_default
    const data = {
      name: payload.name,
      weight: payload.weight,
      height: payload.height,
      types: arrayWithCommas(types),
      image
    }
    state.pokemonDataSelected = data
  },
  CLEAN_POKEMON_DATA (state) {
    state.pokemonDataSelected = null
  },
  SET_TOGGLE_FAVORITE (state, payload) {
    const pokemons = state.pokemonsData
    if (pokemons) {
      const pokemonSelected = pokemons.find(pokemon => pokemon.slug === payload.slug)
      if (pokemonSelected) {
        pokemonSelected.isFavorite = !pokemonSelected.isFavorite
      }
    }
  }
}
