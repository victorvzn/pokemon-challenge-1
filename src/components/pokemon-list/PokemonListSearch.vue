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
export default {
  name: 'PokemonListSearch',
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

    // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    .wrapper-search  {
      margin: 0 auto;
      padding-left: 0;
      padding-right: 0;
      width: 570px;
    }
  }
</style>
