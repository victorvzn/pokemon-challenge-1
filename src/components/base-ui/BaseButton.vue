<template>
  <button
    v-on="$listeners"
    v-bind="$attrs"
    :class="{ 'btn-disabled': isDisabled }">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    border: 0;
    padding: 11px 20px;
    font-family: inherit;
    font-size: 1.125rem;
    font-weight: 700;
    color: #fff;
    border-radius: 60px;
  }

  .btn-normal {
    background-color: var(--red-100);
  }

  .btn-disabled {
    background-color: var(--gray-400);
  }

  .btn:active {
    background: var(--red-200);
  }
</style>
