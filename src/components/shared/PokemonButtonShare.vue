<template>
  <BaseButton
    class="btn btn-normal"
    v-clipboard:copy="messageToCopy"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError">
    {{ label }}
  </BaseButton>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PokemonButtonShare',
  data () {
    return {
      label: 'Share to my friends'
    }
  },
  computed: {
    ...mapGetters({
      pokemonSelected: 'pokemons/getPokemon'
    }),
    messageToCopy () {
      const pkm = this.pokemonSelected
      return `Pokemon: ${pkm.name}, ${pkm.weight}, ${pkm.height}, ${pkm.types}, ${pkm.image}`
    }
  },
  methods: {
    onCopy (e) {
      this.label = 'Copied!'
      setTimeout(() => {
        this.label = 'Share to my friends'
      }, 1500)
    },
    onError () {
      console.log('Failed to copy texts')
    }
  }
}
</script>
