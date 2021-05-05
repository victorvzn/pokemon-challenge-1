<template>
  <div class="PokemonMessage">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <BaseButton
      class="btn btn-normal"
      @click="$router.push({ name: buttonRouteName })">
      {{ buttonDescription }}
    </BaseButton>
  </div>
</template>

<script>
export default {
  name: 'PokemonMessage',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    buttonDescription: {
      type: String,
      default: ''
    },
    buttonRouteName: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
  .PokemonMessage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .PokemonMessage h1 {
    font-size: 2.25rem; // 36px / 16px
    line-height: 43.2px;
  }

  .PokemonMessage p {
    font-size: 1.25rem; // 20px /16px
    line-height: 43.2px;
  }
</style>
