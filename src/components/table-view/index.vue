<template>
  <div class="table-view view-container">
    <div class="content-container"
         :class="{'has-footer': hasFooter}">
      <!-- 过滤 -->
      <filters :filters="filters" v-model="model.filter"/>
      <!-- 过滤 -->
      <!-- 按钮组 -->
      <div class="btn-group component-container">
        <div class="left">
          <tabs/>
          <slot name="slot-left"/>
        </div>
        <div class="right">
          <slot name="slot-right"/>
        </div>
      </div>
      <!-- 按钮组 -->
      <!-- 表格 -->
      <data-table :table-data="tableData" :table-options="tableOptions"/>
      <!-- 表格 -->
    </div>
    <div class="footer-bar"
         v-if="hasFooter">
      <pagination
        :total="total"
        @change-size="onSizeChange"
        @change-page="onPageChange"/>
    </div>
  </div>
</template>

<script>
  import Filters from '../filters/index';
  import Tabs from '../tabs/index';
  import DataTable from '../data-table/index';
  import Pagination from '../pagination/index';

  export default {
    components: {
      Filters,
      Tabs,
      DataTable,
      Pagination
    },
    props: {
      total: {
        type: Number,
        default: 0
      },
      tableData: {
        type: Array,
        default() {
          return [];
        }
      },
      tableOptions: {
        type: Object,
        default() {
          return {
            columns: []
          };
        }
      },
    },
    data() {
      return {
        filters: [
          {type: 'input', label: '姓名', prop: 'name'},
          {type: 'input', label: '类型', prop: 'type'},
        ],
        model: {
          filter: {}
        }
      };
    },
    computed: {
      hasFooter() {
        return true;
      }
    },
    methods: {
      onSizeChange(size) {
        console.log(size, 'size');
      },
      onPageChange(page) {
        console.log(page, 'page');
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "~@/styles/view.scss";

  .btn-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
