<template>
  <div class="filters component-container">
    <el-form>
      <el-row class="row">
        <el-col :span="8" v-for="item in filters" :key="item.prop">
          <el-form-item :label="`${item.label}：`">
            <el-input v-model="val[item.prop]"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  import TwoWay from 'mixins/two-way';

  export default {
    name: 'filters',
    mixins: [TwoWay],
    props: {
      filters: {
        type: Array,
        default() {
          return [];
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .el-input {
    width: 180px;
  }

  .row {
    margin-bottom: -18px;
  }
</style>
