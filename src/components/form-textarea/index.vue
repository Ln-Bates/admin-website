<template>
  <el-input v-model="val" type="textarea"></el-input>
</template>

<script>
  import TwoWay from 'mixins/two-way';

  export default {
    name: 'form-textarea',
    mixins: [TwoWay],
  };
</script>

<style scoped>

</style>

