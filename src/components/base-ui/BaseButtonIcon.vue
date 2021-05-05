<template>
  <div
    class="ButtonIcon"
    v-on="$listeners"
    v-bind="$attrs">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseButtonIcon',
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
  .ButtonIcon {
    width: 44px;
    height: 44px;
    background-color: var(--gray-200);
    border-radius: 50%;
    display: flex;
    line-height: 44px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
</style>
