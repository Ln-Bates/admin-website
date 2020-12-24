<template>
  <table-view
    v-bind="{ total, tableData, tableOptions, tabs, filters }"
    v-model="model"
    :custom-loading="loading"
    @get-data="getData"
  >
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
        loading: false,
        total: 100,
        tableOptions: {
          columns: [
            {label: '日期', prop: 'date'},
            {label: '姓名', prop: 'name'},
            {label: '地址', prop: 'address'},
          ]
        },
        tableData,
        tabs: [
          {label: '全部', value: 1},
          {label: '上家', value: 2},
          {label: '下架', value: 3},
        ],
        filters: [
          {type: 'input', label: '姓名', prop: 'name'},
          {type: 'input', label: '类型', prop: 'type'},
        ],
        model: {
          filter: {},
          tabActive: 1
        },
      };
    },
    methods: {
      getData({page, size}, cb) {
        console.log('get data', page, size);
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          cb();
        }, 2000);
      }
    }
  };
</script>

<style scoped>

</style>
