import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  isLoading: false,
  pokemonsData: null,
  isLoadingDetail: false,
  pokemonDataSelected: null
}

const pokemons = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default pokemons
