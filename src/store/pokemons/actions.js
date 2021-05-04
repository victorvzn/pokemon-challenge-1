import pokemons from '@/services/pokemons'

export default {
  getPokemons ({ commit }, payload) {
    return pokemons.fetchAll(payload)
      .then(response => {
        if (response && response.status === 200) {
          commit('SET_POKEMON_DATA', response.data)
        }
      })
  }
}
