<template>
  <table-view v-bind="{ total, tableData, tableOptions }">
    <template #slot-left>
      <el-button type="primary">
        左侧
      </el-button>
    </template>
    <template #slot-right>
      <el-button type="primary">
        右侧
      </el-button>
    </template>
  </table-view>
</template>

<script>
  export default {
    name: 'example-3',
    data() {
      const tableData = new Array(10);
      tableData.fill({
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      });
      return {
        total: 100,
        tableOptions: {
          columns: [
            {label: '日期', prop: 'date'},
            {label: '姓名', prop: 'name'},
            {label: '地址', prop: 'address'},
          ]
        },
        tableData
      };
    },
  };
</script>

<style scoped>

</style>
