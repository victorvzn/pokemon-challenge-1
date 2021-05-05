<template>
  <div class="Input-wrapper">
    <slot />
    <input
      ref="inputRef"
      :value="value"
      v-bind="$attrs"
      v-on="listeners" />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    value: [String, Number]
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .Input-wrapper {
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    padding: 14px;
    display: flex;
    align-items: center;
    overflow-x: hidden;
  }
  .Input-wrapper input {
    border-radius: 5px;
    font-family: inherit;
    font-weight: 500;
    font-size: 1rem;
    height: 100%;
    padding: .5rem;
    border: 0;
    outline: none;
  }
</style>
