<template>
  <section class="PokemonListItemModal-detail">
    <div class="PokemonListItemModal-detail-item">
      <strong>Name:</strong> <span class="capitalize">{{ data.name }}</span>
    </div>
    <div class="PokemonListItemModal-detail-item">
      <strong>Weight:</strong> <span>{{ data.weight }}</span>
    </div>
    <div class="PokemonListItemModal-detail-item">
      <strong>Height:</strong> <span>{{ data.height }}</span>
    </div>
    <div class="PokemonListItemModal-detail-item">
      <strong>Types:</strong> <span class="capitalize">{{ data.types }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PokemonListItemModalContent',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .PokemonListItemModal-detail-item {
    padding: 10px 0;
    border-bottom: 1px solid var(--gray-300);
  }
  .PokemonListItemModal-detail-item {
    font-family: inherit;
    font-size: 1.125rem; /* 18px / 16px */
  }
  .PokemonListItemModal-detail-item strong {
    font-weight: 700;
  }
  .PokemonListItemModal-detail-item span {
    font-weight: 500;
  }
  .PokemonListItemModal-detail {
    margin: 20px 30px;
  }
</style>
