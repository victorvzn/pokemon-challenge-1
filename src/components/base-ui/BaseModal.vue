<template>
  <Portal selector="#portal-target">
    <div
      class="Modal"
      @click.self="onClose"
      @keydown.esc="onClose"
      tabindex="0">
      <div class="Modal-container">
        <button class="Modal-close-button" @click="onClose">
          <slot name="closeButton"></slot>
        </button>
        <slot />
      </div>
    </div>
  </Portal>
</template>

<script>
import { Portal } from '@linusborg/vue-simple-portal'

export default {
  name: 'BaseModal',
  components: { Portal },
  methods: {
    onClose () {
      this.$emit('onClose')
    }
  }
}
</script>

<style lang="scss" scoped>
.Modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 200;
  overflow: auto;
}

.Modal-container {
  position: relative;
  top: 10rem;
  background-color: #ffffff;
  border-radius: 5px;
  // padding: 1rem;
  width: 315px;
  overflow: hidden;
}

.Modal-close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  border: 0;
  background-color: transparent;
  margin: 0;
  padding: 0;
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .Modal-container {
    width: 570px;
  }
}
</style>
