import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  isLoading: false,
  pokemonData: null
}

const pokemons = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default pokemons
