<template>
  <BaseModal @onClose="onClose">
    <template v-slot:closeButton>
      <IconTimes />
    </template>
    <div class="PokemonListItemModal">
      <section class="PokemonListItemModal-bg">
        <IconPokeball v-if="isLoadingDetail" class="spinner" />
        <img
          v-if="!isLoadingDetail"
          width="180"
          height="180"
          loading="lazy"
          :alt="pokemonSelected.name"
          v-lazy="pokemonSelected.image" />
      </section>

      <PokemonListItemModalContent
        v-if="!isLoadingDetail"
        :data="pokemonSelected" />

      <section class="PokemonListItemModal-actions"
        v-if="!isLoadingDetail">
        <PokemonButtonShare />
        <PokemonButtonFavorite :data="data" />
      </section>
    </div>
  </BaseModal>
</template>

<script>
import { mapGetters } from 'vuex'

import PokemonListItemModalContent from '@/components/pokemon-list/PokemonListItemModalContent.vue'
import PokemonButtonShare from '@/components/shared/PokemonButtonShare.vue'
import PokemonButtonFavorite from '@/components/shared/PokemonButtonFavorite.vue'

export default {
  name: 'PokemonListItemModal',
  components: {
    PokemonListItemModalContent,
    PokemonButtonShare,
    PokemonButtonFavorite
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      isLoadingDetail: 'pokemons/isLoadingDetail',
      pokemonSelected: 'pokemons/getPokemon'
    })
  },
  methods: {
    onClose () {
      this.$emit('onClose')
    }
  }
}
</script>

<style scoped>
  .PokemonListItemModal-bg {
    background-image: url(/images/bg.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .PokemonListItemModal-bg img {
    width: 180px;
    height: 180px;
  }
  .PokemonListItemModal-actions {
    margin: 20px 30px;
  }
  .PokemonListItemModal-actions {
    display: flex;
    justify-content: space-between;
  }
</style>
