<template>
  <section class="welcome text-center">
    <div class="">
      <img src="../assets/pikachu.svg" alt="Pikachu" />
      <h1 class="text-gray-600">Welcome to Pokédex</h1>
      <p class="text-gray-500">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WelcomeView'
}
</script>

<style lang="scss" scoped>
  .welcome img {
    margin-top: 70px;
    margin-bottom: 60px;
  }

  .welcome h1 {
    margin-bottom: 30px;
  }

  .welcome p {
    padding: 0 30px;
    margin-bottom: 50px;
  }
</style>
