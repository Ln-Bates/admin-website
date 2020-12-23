<template>
  <el-pagination
    background
    :page-sizes="PAGE_SIZES"
    :layout="layout"
    :total="total"
    :hide-on-single-page="true"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
</template>

<script>
  import {PAGE_SIZES} from 'utils/constant';

  export default {
    name: 'pagination',
    props: {
      total: {
        type: Number,
        default: 20
      },
    },
    data() {
      return {
        PAGE_SIZES,
        layout: 'total, sizes, prev, pager, next'
      };
    },
    methods: {
      handleSizeChange(size) {
        this.$emit('change-size', size);
      },
      handleCurrentChange(current) {
        this.$emit('change-page', current);
      }
    },
  };
</script>

<style scoped>

</style>
