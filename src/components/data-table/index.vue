<template>
  <div class="table-container component-container">
    <el-table
      :data="[]">
      <el-table-column v-for="(column, index) in tableOptions.columns"
                       :key="index"
                       :prop="column.prop"
                       :label="column.label">
      </el-table-column>
      <template #empty>
        <empty/>
      </template>
    </el-table>
  </div>
</template>

<script>
  import Empty from '../empty/index';

  export default {
    components: {
      Empty
    },
    name: 'dataTable',
    props: {
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
      return {};
    }
  };
</script>

<style lang="scss" scoped></style>
