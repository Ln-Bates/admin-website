<template>
  <el-input v-model="val"></el-input>
</template>

<script>
  import TwoWay from 'mixins/two-way';
  export default {
    name: 'input-int',
    mixins: [TwoWay],
  };
</script>

<style scoped>

</style>

