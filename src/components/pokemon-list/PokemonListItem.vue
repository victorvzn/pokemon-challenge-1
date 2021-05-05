<template>
  <div class="PokemonListItem" @click.self="openModal(data.slug)">
    <span @click.self="openModal(data.slug)">{{ data.name }}</span>

    <PokemonButtonFavorite :data="data" />

    <PokemonListItemModal
      v-if="isModalOpen"
      @onClose="closeModal"
      :data="data" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PokemonListItemModal from '@/components/pokemon-list/PokemonListItemModal.vue'
import PokemonButtonFavorite from '@/components/shared/PokemonButtonFavorite.vue'

export default {
  name: 'PokemonListItem',
  components: { PokemonListItemModal, PokemonButtonFavorite },
  data () {
    return {
      isModalOpen: false
    }
  },
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    ...mapGetters({
      getPokemons: 'pokemons/getPokemons'
    })
  },
  methods: {
    toggleModal (name) {
      this.isModalOpen = !this.isModalOpen
    },
    openModal (name) {
      this.toggleModal()
      this.$store.dispatch('pokemons/getPokemonByName', name)
    },
    closeModal (name) {
      this.toggleModal()
    }
  }
}
</script>

<style lang="scss" scoped>
  .PokemonListItem {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    padding: 7px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: var(--white);
    cursor: pointer;
    transition: background .2s ease-in;
  }

  // .PokemonListItem:hover {
  //   background-color: var(--gray-200);
  // }

  .PokemonListItem span {
    font-family: inherit;
    font-weight: 500;
    line-height: 26px;
    font-size: 1.375rem; // 22px / 16px
    display: flex;
    align-items: center;
    text-transform: capitalize;
    margin-left: 10px;;
  }
</style>
