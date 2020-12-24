<template>
  <el-radio-group v-model="val" class="tabs">
    <el-radio-button label="1">全部</el-radio-button>
    <el-radio-button label="2">上架</el-radio-button>
    <el-radio-button label="3">下架</el-radio-button>
  </el-radio-group>
</template>

<script>
  import TwoWay from 'mixins/two-way';

  export default {
    name: 'tabs',
    mixins: [TwoWay]
  };
</script>

<style lang="scss" scoped>
  .tabs {
    margin-right: $inner-size;
  }
</style>
