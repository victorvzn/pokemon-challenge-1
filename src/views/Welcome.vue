<template>
  <section class="Welcome text-center">
    <div class="container">
      <IconPikachu />
      <h1 class="text-gray-600">Welcome to Pokédex</h1>
      <p class="text-gray-500">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
      <BaseButton
        class="btn btn-normal"
        @click="handleGetStared">
        Get started
      </BaseButton>
    </div>
  </section>
</template>

<script>
import IconPikachu from '@/components/icons/IconPikachu.vue'

export default {
  name: 'WelcomeView',
  components: { IconPikachu },
  methods: {
    handleGetStared () {
      this.$router.push({ name: 'pokemon-list-all' }).catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
  .Welcome {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Welcome svg {
    margin-top: 70px;
    margin-bottom: 60px;
  }

  .Welcome h1 {
    margin-bottom: 30px;
  }

  .Welcome p {
    padding: 0 30px;
    margin-bottom: 50px;
  }

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 570px;
    margin-bottom: 70px;
  }

  @media (min-width: 576px) {
    .Welcome p {
      padding-left: 2px;
      padding-right: 2px;
    }
  }
</style>
