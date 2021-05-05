import pokemons from '@/services/pokemons'

import { sleeper } from '../helpers'

export default {
  getPokemons ({ commit }, payload) {
    commit('SET_ISLOADING', true)
    return pokemons.fetchAll(payload)
      .then(sleeper(500))
      .then(response => {
        if (response && response.status === 200) {
          commit('SET_POKEMON_DATA', response.data)
        }
        commit('SET_ISLOADING', false)
      })
  }
}