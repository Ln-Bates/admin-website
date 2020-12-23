<template>
  <div class="table-view view-container">
    <div class="content-container"
         :class="{'has-footer': hasFooter}">
      <filters/>
      <div class="btn-group component-container">
        <div class="left">
          <slot name="slot-left"/>
        </div>
        <div class="right">
          <slot name="slot-right"/>
        </div>
      </div>
      <data-table :table-data="tableData" :table-options="tableOptions"/>
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
  import DataTable from '../data-table/index';
  import Pagination from '../pagination/index';

  export default {
    components: {
      Filters,
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
