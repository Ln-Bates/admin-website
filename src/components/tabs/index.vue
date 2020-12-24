<template>
  <el-radio-group v-model="val" class="tabs">
    <el-radio-button
      v-for="item in tabs"
      :label="item.value"
      :key="item.value">
      {{item.label}}
    </el-radio-button>
  </el-radio-group>
</template>

<script>
  import TwoWay from 'mixins/two-way';

  export default {
    name: 'tabs',
    props: {
      tabs: {
        type: Array,
        default() {
          return [];
        }
      },
    },
    mixins: [TwoWay],
    mounted() {
      console.log(this.tabs);
    }
  };
</script>

<style lang="scss" scoped>
  .tabs {
    margin-right: $inner-size;
  }
</style>
