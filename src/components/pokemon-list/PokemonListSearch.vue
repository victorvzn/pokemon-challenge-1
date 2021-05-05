<template>
  <div class="wrapper-search">
    <BaseInput
      type="text"
      placeholder="Search"
      autocomplete="off"
      :autofocus="true"
      @keyup="onSearch">
      <IconSearch />
    </BaseInput>
  </div>
</template>

<script>
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  name: 'PokemonListSearch',
  components: { IconSearch },
  methods: {
    onSearch (e) {
      this.$emit('onSearch', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper-search {
    background-color: var(--gray-100);
    padding: 35px 30px 20px 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
