<template>
  <div class="PokemonListItem" @click="openModal(data.name)">
    <span>{{ data.nameWithoutHyphens }}</span>
    <BaseButtonIcon @click.exact="onToggleFavorite(data.name)">
      <IconStarGold v-if="data.isFavorite" />
      <IconStarSilver v-else />
    </BaseButtonIcon>

    <PokemonListItemModal v-if="isModalOpen" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import IconStarSilver from '@/components/icons/IconStarSilver.vue'
import IconStarGold from '@/components/icons/IconStarGold.vue'
import PokemonListItemModal from '@/components/pokemon-list/PokemonListItemModal.vue'

export default {
  name: 'PokemonListItem',
  components: { IconStarSilver, IconStarGold, PokemonListItemModal },
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
    onToggleFavorite (name) {
      this.$store.commit('pokemons/SET_TOGGLE_FAVORITE', { name })
    },
    openModal (name) {
      this.isModalOpen = !this.isModalOpen
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

  .PokemonListItem:hover {
    background-color: var(--gray-200);
  }

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
