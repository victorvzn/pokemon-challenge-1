import pokemons from '@/services/pokemons'

import { sleeper } from '../helpers'

export default {
  getPokemons ({ commit }, payload) {
    commit('SET_ISLOADING', true)
    return pokemons.fetchAll(payload)
      .then(sleeper(400))
      .then(response => {
        if (response && response.status === 200) {
          commit('SET_POKEMONS_DATA', response.data)
        }
        commit('SET_ISLOADING', false)
      })
  },
  getPokemonByName ({ commit }, payload) {
    commit('SET_ISLOADING_DETAIL', true)
    return pokemons.getByName(payload)
      // .then(sleeper(300))
      .then(response => {
        if (response && response.status === 200) {
          commit('SET_POKEMON_DATA', response.data)
        }
        commit('SET_ISLOADING_DETAIL', false)
      })
  }
}
