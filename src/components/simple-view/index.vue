<template>
  <div class="simple-view view-container">
    <div class="content-container"
         :class="{'has-footer': hasFooter}">
      <slot/>
    </div>
    <div class="footer-bar"
         v-if="hasFooter">
      <slot name="footer-bar"/>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      hasFooter() {
        return !!this.$slots['footer-bar'];
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~@/styles/view.scss";
</style>
