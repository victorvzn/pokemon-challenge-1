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
    font-size: 1.125rem; // 18px / 16px
    font-weight: 700;
    color: #fff;
    border-radius: 60px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 150px;
  }

  .btn-normal {
    background-color: var(--red-100);
  }

  .btn-normal span {
    padding-left: 10px;
  }

  .btn-disabled {
    background-color: var(--gray-400);
  }

  .btn:active {
    background: var(--red-200);
  }
</style>
